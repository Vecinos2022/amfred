'use client'

import { ErrorLabel } from '@/components/shared/ErrorLabel'
import { Button, Input } from '@nextui-org/react'
import Image from 'next/image'
import { SubmitHandler, useForm } from 'react-hook-form'

import { useAuthBoundStore } from '@/store/auth/authSharedSlice'
import { BsEyeFill, BsEyeSlash } from 'react-icons/bs'

import LoaderScreen from '@/components/shared/LoaderScreen'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import logoAmfred from '../../assets/imgs/amfred_logo.png'
import imagenAmfred from '../../assets/imgs/amfred_logo.png'

interface LoginFormInputs {
  email: string
  password: string
}

const LoginPage = () => {
  const session = useSession()
  const router = useRouter()

  const { isPasswordVisible, error, isPosting } = useAuthBoundStore(
    (state) => ({
      isPosting: state.isPosting,
      isAuthenticated: state.isAuthenticated,
      isPasswordVisible: state.isPasswordVisible,
      error: state.error
    })
  )

  const { submitLoginForm, toggleIsPasswordVisible, setUser } =
    useAuthBoundStore()

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<LoginFormInputs>()

  const onSubmit: SubmitHandler<LoginFormInputs> = (data) =>
    submitLoginForm(data.email, data.password)

  useEffect(() => {
    if (session.status === 'authenticated') {
      router.push('/admin/dashboard')
      setUser(session.data?.user)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [session])

  const btnShowPasswordStyles = 'text-2xl text-default-400 pointer-events-none'

  return (
    <>
      {session.status === 'authenticated' ? (
        <LoaderScreen />
      ) : (
        <section className='relative flex flex-wrap lg:h-screen lg:items-center'>
          <div className='w-full h-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24 bg-default-200'>
            <div className='mx-auto max-w-lg text-center'>
              <h1 className='text-2xl mt-0  mb-8 font-bold sm:text-3xl'>
                Iniciar Sesión
              </h1>

              <p className='mt-4 text-gray-500'>
                Sistema de control de asistencias
              </p>
            </div>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className='mx-auto mb-0 mt-8 max-w-md space-y-4'
            >
              <div>
                <label htmlFor='email' className='sr-only'>
                  Correo
                </label>
                <Input
                  type='email'
                  label='Correo electrónico'
                  isInvalid={errors.email ? true : false}
                  errorMessage={errors.email ? errors.email.message : ''}
                  {...register('email', {
                    required: 'Este campo es requerido'
                  })}
                />
              </div>

              <div>
                <Input
                  label='Contraseña'
                  endContent={
                    <button
                      className='focus:outline-none'
                      type='button'
                      onClick={() => toggleIsPasswordVisible()}
                    >
                      {isPasswordVisible ? (
                        <BsEyeSlash className={btnShowPasswordStyles} />
                      ) : (
                        <BsEyeFill className={btnShowPasswordStyles} />
                      )}
                    </button>
                  }
                  type={isPasswordVisible ? 'text' : 'password'}
                  {...register('password', {
                    required: 'Este campo es requerido'
                  })}
                  isInvalid={errors.password ? true : false}
                  errorMessage={errors.password ? errors.password.message : ''}
                />
              </div>
              <div className='flex justify-center'>
                {error && <ErrorLabel text={error ? error : ''} />}
              </div>
              <div className='flex items-center justify-between'>
                <Button
                  type='submit'
                  color='primary'
                  className='block w-full'
                  isLoading={isPosting}
                >
                  Iniciar sesión
                </Button>
              </div>
              <div className='flex items-center justify-center'>
                <p className='text-center text-sm text-gray-500'>
                  <a className='underline' href='#'>
                    Recuperar contraseña
                  </a>
                </p>
              </div>
            </form>
          </div>
          <div className='relative flex justify-center items-center w-full  lg:h-full lg:w-1/2'>
            <div className='flex flex-col items-center'>
              <div className='w-full max-w-xs sm:max-w-md lg:max-w-lg'>
                <Image
                  alt='Logo AMFRED'
                  src={imagenAmfred}
                  className='w-full h-full object-cover'
                />
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  )
}

export default LoginPage

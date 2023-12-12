'use client'
import { useRouter } from 'next/navigation'

const ForbiddenPage = () => {
  const router = useRouter()
  return (
    <div className="grid h-screen px-4 bg-white place-content-center">
      <div className="text-center">
        <h1 className="font-black text-gray-200 text-9xl">403</h1>

        <p className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Uh-oh!
        </p>

        {/* eslint-disable-next-line react/no-unescaped-entities */}
        <p className="mt-4 text-gray-500">
          No tienes permisos para acceder a esta pagina .
        </p>

        <button
          onClick={() => router.push('/login')}
          className="inline-block px-5 py-3 mt-6 text-sm font-medium text-white bg-indigo-600 rounded hover:bg-indigo-700 focus:outline-none focus:ring"
        >
          Go Back Home
        </button>
      </div>
    </div>
  )
}

export default ForbiddenPage

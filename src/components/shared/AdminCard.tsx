'use client'

import { Button, Card, CardBody, CardHeader, Divider } from '@nextui-org/react'
import { useRouter } from 'next/navigation'
import { FaArrowLeft } from 'react-icons/fa'
import { MdAdd } from 'react-icons/md'
import { Loader } from './Loader'
interface AdminCardProps {
  title?: string
  button?: React.ReactNode
  children: React.ReactNode
  backBtn?: boolean
  cardHeader?: boolean
  isLoading?: boolean
  addButton?: string | null
}

const AdminCard: React.FC<AdminCardProps> = ({
  title,
  button,
  children,
  backBtn = false,
  cardHeader = true,
  isLoading = false,
  addButton = null
}) => {
  const router = useRouter()

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <Card className="min-h-[20vh]">
          {cardHeader && (
            <CardHeader className="flex items-center justify-between py-5 px-9">
              <p className="text-gray-400 font-bold text-sm">{title}</p>
              <div className="flex gap-2">
                {addButton && (
                  <Button
                    variant="solid"
                    color="primary"
                    onPress={() => router.push(addButton)}
                  >
                    <span className="text-center flex">
                      <MdAdd size="20" />
                      Agregar
                    </span>
                  </Button>
                )}
                {button}
                {backBtn && (
                  <Button
                    variant="solid"
                    color="default"
                    onPress={() => router.back()}
                  >
                    <FaArrowLeft /> Regresar
                  </Button>
                )}
              </div>
            </CardHeader>
          )}

          <Divider />
          <CardBody className="p-9">{children}</CardBody>
        </Card>
      )}
    </>
  )
}

export default AdminCard

'use client'

import { Breadcrumbs, BreadcrumbItem, Button } from '@nextui-org/react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { FaArrowLeft } from 'react-icons/fa'

interface AdminHeaderProps {
  title: string
  subtitle?: string
  showBreadcrumbs?: boolean
  backBtn?: boolean
}

const AdminHeader: React.FC<AdminHeaderProps> = ({ title, subtitle = '', showBreadcrumbs = true, backBtn = false }) => {
  const router = useRouter()
  const paths = usePathname()
  const pathNames = paths.split('/').filter((path) => path)

  const goBack = () => {
    router.back()
  }

  return (
    <div className='mb-10 px-1'>
      <div className='flex justify-between items-center mb-3 pr-5'>
        <h1 className='font-bold' style={{ fontSize: 32 }}>
          {title}
        </h1>
        {backBtn && (
          <Button startContent={<FaArrowLeft />} onClick={goBack}>
            Regresar
          </Button>
        )}
      </div>
      {subtitle && (
        <p className='text-justify px-2' style={{ fontSize: 16 }}>
          {subtitle}
        </p>
      )}
      {showBreadcrumbs && (
        <Breadcrumbs>
          {pathNames.map((link, index) => {
            const href = `/${pathNames.slice(0, index + 1).join('/')}`
            const itemLink = link
              .split('-')
              .map((part) => part[0].toUpperCase() + part.slice(1))
              .join(' ')
            return (
              <BreadcrumbItem key={index} isDisabled={index === 0 || index === 1}>
                <Link href={href}>{itemLink}</Link>
              </BreadcrumbItem>
            )
          })}
        </Breadcrumbs>
      )}
    </div>
  )
}

export default AdminHeader

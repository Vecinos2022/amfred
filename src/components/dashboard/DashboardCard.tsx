import { CustomCard } from '../shared/CustomCard'

interface DashboardCardProps {
  icon: JSX.Element
  title: string
  subtitle: string
  content: React.ReactNode
}

export const DashboardCard: React.FC<DashboardCardProps> = ({ icon, title, subtitle, content }) => {
  return (
    <CustomCard>
      <span className='rounded-full bg-blue-100 p-4 text-blue-600 '>{icon}</span>

      <div className='sm:text-lg md:text-xl lg:text-2xl xl:text-3xl'>
        <p className='text-sm font-light text-gray-500'>{title}</p>
        <p className='text-3xl font-bold text-gray-900 mt-1'>{content}</p>
        <p className='text-sm text-gray-500 mt-5'>{subtitle}</p>
      </div>
    </CustomCard>
  )
}

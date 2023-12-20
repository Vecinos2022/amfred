'use client'
import { useEffect, useState } from 'react'
import dayjs from '@/services/daysJsConfig'

const ClockNavbar = () => {
  const date = new Date()
  const [clockState, setClockState] = useState<string>()

  useEffect(() => {
    setInterval(() => {
      const hora = new Date()
      setClockState(hora.toLocaleTimeString())
    }, 1000)
  }, [])

  return (
    <>
      <div className='bg-[#94b7e5] text-[#f3f6fc] font-black flex flex-row justify-end pe-5'>
        <span className='p-2'>{dayjs().format('dddd')}</span>
        <span className='p-2'>{dayjs().format('DD/MM/YYYY')}</span>
        <span className='p-2'>{clockState}</span>
      </div>
    </>
  )
}

export default ClockNavbar

import { Image } from '@nextui-org/react'
import logo from '../../assets/imgs/AMFRED_LOGO1.png'

type LogoMainProps = {
  width?: number
}

const LogoMain = ({ width = 100 }: LogoMainProps) => {
  return <Image width={width} alt='Logo AMFRED' src={logo.src} />
}

export default LogoMain

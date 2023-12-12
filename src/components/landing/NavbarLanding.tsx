'use client'

import {
  Button,
  Link as LinkUI,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle
} from '@nextui-org/react'
import Link from 'next/link'
import { useEffect, useState } from 'react'

import { useAuthBoundStore } from '@/store/auth/authSharedSlice'
import { useSession } from 'next-auth/react'
import LogoMain from '../shared/LogoMain'

const NavbarLanding = () => {
  const session = useSession()

  const { user } = useAuthBoundStore((state) => ({
    user: state.user,
    isAuthenticated: state.isAuthenticated
  }))

  const { setUser } = useAuthBoundStore()

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const menuItems = ['Registrarse']

  useEffect(() => {
    if (session.status === 'authenticated') {
      setUser(session.data?.user)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [session])

  return (
    <Navbar isBordered isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        />
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
          <LogoMain />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarBrand>
          <LogoMain />
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button as={Link} color="warning" href="/login" variant="flat">
            {user ? user.nombre : 'Iniciar sesión'}
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <LinkUI className="w-full" color="foreground" href="#" size="lg">
              {item}
            </LinkUI>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  )
}

export default NavbarLanding

import { withAuth } from 'next-auth/middleware'
import { Roles } from './constants/roles'
import { childOptions } from './constants/routes'

export default withAuth({
  pages: {
    error: '/forbidden'
  },
  callbacks: {
    authorized: ({ req, token }: { req: any; token: any }) => {
      const rol = token?.user.role
      const path = req.nextUrl.pathname

      if (path.includes('/api/public')) return true

      const roles = Object.values(Roles)

      if (!roles.includes(rol)) {
        return false
      }

      if (!rol) return false

      if (rol === Roles.SUPERADMIN) {
        return true
      } else {
        let salir = true
        childOptions.forEach((child) => {
          if (child.path === path) {
            if (!child.rol.includes(rol)) {
              salir = false
              return
            }
          }
        })
        return salir
      }
    }
  }
})

export const config = {
  matcher: [
    '/admin/:path*'
    // '/api/:path*'
  ]
}

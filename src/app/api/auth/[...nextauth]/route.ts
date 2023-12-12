import { connectDB } from '@/libs/mongodb'
import User from '@/models/User'
import bycrypt from 'bcryptjs'
import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

const handler = NextAuth({
  pages: {
    signIn: '/login'
  },
  session: {
    strategy: 'jwt'
  },
  // events: {
  //   async session(token) {
  //     console.log(token)
  //   }
  // },
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: {
          label: 'email',
          type: 'email',
          placeholder: 'correo electronico'
        },
        password: { label: 'Password', type: 'password' }
      },
      async authorize(credentials) {
        await connectDB()
        let userFound = await User.findOne({ correo: credentials?.email })
        if (!userFound) throw new Error('Crendenciales invalidas')
        const passwordMatch = await bycrypt.compare(
          credentials!.password,
          userFound.contrasena
        )
        if (!passwordMatch) throw new Error('Crendenciales invalidas')
        // userFound = {
        //   name: userFound.nombre as string,
        //   email: userFound.correo as string,
        //   rol: userFound.rol as string
        // }
        return userFound
      }
    })
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.user = user
      }
      return token
    },
    async session({ session, token }) {
      session.user = token.user as any
      return session
    }
  }
})

export { handler as GET, handler as POST }

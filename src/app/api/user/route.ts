import { getToken } from 'next-auth/jwt'
import { connectDB } from '@/libs/mongodb'
import { NextRequest, NextResponse } from 'next/server'
import User from '@/models/User'

export async function GET(req: NextRequest) {
  await connectDB()

  try {
    const data = await User.find()

    return NextResponse.json({ data })
  } catch (error) {
    console.error(error)
  }
}

export async function POST(req: NextRequest) {
  const data = await req.json()

  await connectDB()

  const usuario = new User(data)

  try {
    await usuario.save()

    return NextResponse.json({
      msg: 'Usuario agregado correctamente',
      data: usuario
    })
  } catch (error) {
    console.error(error)

    return NextResponse.json({ msg: 'Error al agregar usuario' })
  }
}

export async function PUT(req: NextRequest) {}

import { connectDB } from '@/libs/mongodb'
import User from '@/models/User'
import bcrypt from 'bcryptjs'
import { NextRequest, NextResponse } from 'next/server'

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

  const password = await bcrypt.hash(data.password, 12)
  const usuario = new User({
    email: data.email,
    password: password,
    description: data.description,
    role: data.role,
    name: data.name
  })

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

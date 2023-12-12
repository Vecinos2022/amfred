import { getToken } from 'next-auth/jwt'
import { connectDB } from '@/libs/mongodb'
import { NextRequest, NextResponse } from 'next/server'

import Usuario from '@/models/Usuario'

export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
  const { id } = params

  try {
    await connectDB()

    const data = await req.json()

    await Usuario.findByIdAndUpdate(id, data)

    return NextResponse.json({
      msg: 'Usuario actualizado'
    })
  } catch (error) {
    console.error(error)

    return NextResponse.json({ msg: 'Error al actualizado' })
  }
}

export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  const { id } = params

  try {
    await connectDB()

    await Usuario.findByIdAndDelete(id)

    return NextResponse.json({
      msg: 'Usuario eliminado correctamente'
    })
  } catch (error) {
    console.error(error)

    return NextResponse.json({ msg: 'Error al eliminar' })
  }
}

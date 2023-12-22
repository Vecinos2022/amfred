import { NextRequest, NextResponse } from 'next/server'
import { connectDB } from '@/libs/mongodb'
import Noticia from '@/models/Noticia'

export async function PUT(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = params

  try {
    await connectDB()

    const data = await req.json()

    await Noticia.findByIdAndUpdate(id, data)

    return NextResponse.json({
      msg: 'Noticia actualizada'
    })
  } catch (error) {
    console.error(error)

    return NextResponse.json({ msg: 'Error al actualizado' })
  }
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = params

  try {
    await connectDB()

    const data = {
      estatus: false
    }

    await Noticia.findByIdAndUpdate(id, data)

    return NextResponse.json({
      msg: 'Noticia eliminado correctamente'
    })
  } catch (error) {
    console.error(error)

    return NextResponse.json({ msg: 'Error al eliminar' })
  }
}

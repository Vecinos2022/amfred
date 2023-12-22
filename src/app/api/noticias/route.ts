import { NextRequest, NextResponse } from 'next/server'
import { connectDB } from '@/libs/mongodb'
import Noticia from '@/models/Noticia'

export async function POST(req: NextRequest) {
  const data = await req.json()
  await connectDB()

  const noticia = new Noticia({
    titulo: data.titulo,
    descripcion: data.descripcion,
    imagen: data.imagen
  })

  try {
    await noticia.save()

    return NextResponse.json({
      msg: 'Noticia agregada correctamente',
      data: noticia
    })
  } catch (error) {
    console.error(error)

    return NextResponse.json({ msg: 'La noticia no se agrego' })
  }
}

export async function GET() {
  await connectDB()
  const data = await Noticia.find()
  return NextResponse.json({ message: data })
}

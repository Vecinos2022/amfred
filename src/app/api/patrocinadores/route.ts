import { NextRequest, NextResponse } from 'next/server'
import { connectDB } from '@/libs/mongodb'
import { writeFile } from 'fs/promises'
import { createHash } from 'crypto'
import Patrocinador from '@/models/Patrocinador'

export async function POST(req: NextRequest) {
  const data = await req.formData()
  // Usamos el método entries() para obtener un iterador de pares clave-valor
  const entries = data.entries()

  // Convertimos el iterador en un objeto usando Object.fromEntries()
  const formDataObject = Object.fromEntries(entries)

  const file: File | null = data.get('imagen') as unknown as File

  const bytes = await file.arrayBuffer()
  const buffer = Buffer.from(bytes)

  // Agregar la marca de tiempo al contenido del archivo antes de calcular el hash
  const timestamp = Date.now().toString()
  const contenidoConTimestamp = Buffer.concat([Buffer.from(timestamp), buffer])

  // Calcular el hash del contenido del archivo con la marca de tiempo
  const hash = createHash('sha256').update(contenidoConTimestamp).digest('hex')

  // Obtener la extensión del archivo
  const fileExtension = file.name.split('.').pop()
  // Construir el nuevo nombre del archivo con el hash y la extensión
  const hashedFileName = `${hash}.${fileExtension}`
  // With the file data in the buffer, you can do whatever you want with it.
  // For this, we'll just write it to the filesystem in a new location
  const path = `./public/img/patrocinadores/${hashedFileName}`
  const imagePath = `/img/patrocinadores/${hashedFileName}`
  await writeFile(path, buffer)

  await connectDB()

  const patrocinador = new Patrocinador({
    nombre_patrocinador: formDataObject.nombre_patrocinador,
    descripcion: formDataObject.descripcion,
    sitio_web: formDataObject.sitio_web,
    direccion: formDataObject.direccion,
    telefono: formDataObject.telefono,
    imagen: imagePath
  })

  try {
    await patrocinador.save()

    return NextResponse.json({
      msg: 'Patrocinador agregado correctamente',
      data: patrocinador
    })
  } catch (error) {
    console.error(error)

    return NextResponse.json({ msg: 'El patrocinador no se agrego' })
  }
}

export async function GET() {
  await connectDB()
  const data = await Patrocinador.find().sort({ updatedAt: -1 })
  return NextResponse.json({ message: data })
}

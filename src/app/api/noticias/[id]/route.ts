import { NextRequest, NextResponse } from 'next/server'
import { connectDB } from '@/libs/mongodb'
import Noticia from '@/models/Noticia'
import { createHash } from 'crypto'
import { writeFile } from 'fs/promises'
import fs from 'fs/promises'

export async function PUT(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = params

  try {
    await connectDB()
    const data = await req.formData()

    // Usamos el método entries() para obtener un iterador de pares clave-valor
    const entries = data.entries()

    // Convertimos el iterador en un objeto usando Object.fromEntries()
    const formDataObject = Object.fromEntries(entries)

    if (formDataObject.imagen) {
      const noticiaAntigua = await Noticia.findById(id)
      const rutaImagenAntigua = noticiaAntigua.imagen // Ajusta esto según tu modelo

      // Eliminar la imagen antigua si existe
      if (rutaImagenAntigua) {
        await fs.unlink(`./public${rutaImagenAntigua}`)
      }
      const file: File | null = data.get('imagen') as unknown as File

      const bytes = await file.arrayBuffer()
      const buffer = Buffer.from(bytes)

      // Agregar la marca de tiempo al contenido del archivo antes de calcular el hash
      const timestamp = Date.now().toString()
      const contenidoConTimestamp = Buffer.concat([
        Buffer.from(timestamp),
        buffer
      ])

      // Calcular el hash del contenido del archivo con la marca de tiempo
      const hash = createHash('sha256')
        .update(contenidoConTimestamp)
        .digest('hex')

      // Obtener la extensión del archivo
      const fileExtension = file.name.split('.').pop()
      // Construir el nuevo nombre del archivo con el hash y la extensión
      const hashedFileName = `${hash}.${fileExtension}`
      // With the file data in the buffer, you can do whatever you want with it.
      // For this, we'll just write it to the filesystem in a new location
      const path = `./public/img/noticias/${hashedFileName}`
      const imagePath = `/img/noticias/${hashedFileName}`
      // Si hay una nueva imagen en el formulario
      await writeFile(path, buffer)

      await Noticia.findByIdAndUpdate(id, {
        ...formDataObject,
        ...(file && { imagen: imagePath })
      })
    } else {
      await Noticia.findByIdAndUpdate(id, formDataObject)
    }

    return NextResponse.json({
      msg: 'Noticia actualizada'
    })
  } catch (error) {
    console.error(error)

    return NextResponse.json({ msg: 'Error al actualizar Noticia' })
  }
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = params

  try {
    await connectDB()

    const noticia = await Noticia.findById(id)

    const data = {
      estatus: !noticia.estatus
    }

    await Noticia.findByIdAndUpdate(id, data)

    return NextResponse.json({
      msg: 'Estatus de Noticia actualizado correctamente'
    })
  } catch (error) {
    console.error(error)

    return NextResponse.json({ msg: 'Error al actualizar Estatus' })
  }
}

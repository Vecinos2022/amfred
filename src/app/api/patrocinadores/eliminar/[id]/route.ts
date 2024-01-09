import { NextRequest, NextResponse } from 'next/server'
import { connectDB } from '@/libs/mongodb'
import Patrocinador from '@/models/Patrocinador'

export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = params

  try {
    await connectDB()

    const patrocinador = await Patrocinador.findById(id)

    const data = {
      estatus: !patrocinador.estatus
    }

    await Patrocinador.findByIdAndDelete(id, data)

    return NextResponse.json({
      msg: 'Patrocinador eliminado correctamente'
    })
  } catch (error) {
    console.error(error)

    return NextResponse.json({ msg: 'Error al eliminar Patrocinador' })
  }
}

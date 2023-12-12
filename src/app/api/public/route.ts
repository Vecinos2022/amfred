import { NextRequest, NextResponse } from 'next/server'

import { connectDB } from '@/libs/mongodb'
import Asistencia from '@/models/Asistencia'
import Edificio from '@/models/Edificio'
import Empleado from '@/models/Empleado'
import dayjs from '@/services/daysJsConfig'
import { sinDiacriticos } from '@/services/sinDiacriticos'

export async function POST(req: NextRequest) {
  const { uid, date } = await req.json()

  await connectDB()
  await Edificio.find()

  const employe = await Empleado.findById(uid).populate('lugar_trabajo')

  const day = sinDiacriticos(dayjs(date).format('dddd'))
  const laboralDay = employe.horario_laboral[day]

  if (!laboralDay.estatus) {
    return NextResponse.json({
      message: 'El empleado no tiene horario laboral este día'
    })
  }

  const asistencia = await Asistencia.findOne({
    uid,
    $expr: {
      $and: [
        { $eq: [{ $month: '$fecha' }, dayjs(date).format('MM')] },
        { $eq: [{ $year: '$fecha' }, dayjs(date).format('YYYY')] },
        {
          $eq: [{ $dayOfMonth: '$fecha' }, dayjs(date).format('DD')]
        }
      ]
    }
  })

  const entradaHora =
    laboralDay[asistencia ? 'salida' : 'entrada'].split(':')[0]
  const entradaMinutos =
    laboralDay[asistencia ? 'salida' : 'entrada'].split(':')[1]
  const newDate = dayjs(date)
  const limitDate = dayjs(date)
    .set('h', entradaHora)
    .set('minutes', entradaMinutos)
    .add(parseInt(laboralDay.tolerancia) + 1, 'minute')
  const flag = newDate.isBefore(limitDate)

  if (!asistencia) {
    const newAsistencia = new Asistencia({
      uid,
      fecha: date,
      no_empleado: employe.no_empleado,
      nombre_empleado:
        employe.nombre +
        ' ' +
        employe.primer_apellido +
        ' ' +
        employe.segundo_apellido,
      lugar_trabajo: employe.lugar_trabajo._id,
      hora_entrada: {
        status: flag ? 'Cumplido' : 'Retraso',
        hora: dayjs(date)
      }
    })
    await newAsistencia.save()
  } else {
    await Asistencia.findByIdAndUpdate(asistencia._id, {
      hora_salida: {
        status: flag ? 'Cumplido' : 'Retraso',
        hora: dayjs(date)
      }
    })
  }

  return NextResponse.json(asistencia)
}

export async function GET() {
  return NextResponse.json({ message: 'Funcionando' })
}

export async function PUT(req: NextRequest) {
  return NextResponse.json({ message: 'Funcionando' })
}

export async function DELETE(req: NextRequest) {
  return NextResponse.json({ message: 'Funcionando' })
}

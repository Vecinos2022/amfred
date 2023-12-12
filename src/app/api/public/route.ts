import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  return NextResponse.json({ message: 'Funcionando' })
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

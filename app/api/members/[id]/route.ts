import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function GET(req: Request, { params }: { params: { id: string } }) {
  try {
    const member = await prisma.user.findUnique({
      where: { id: params.id },
      include: { membershipType: true },
    })
    if (!member) {
      return NextResponse.json({ error: 'Member not found' }, { status: 404 })
    }
    return NextResponse.json(member)
  } catch (error) {
    return NextResponse.json({ error: 'Error fetching member' }, { status: 500 })
  }
}

export async function PUT(req: Request, { params }: { params: { id: string } }) {
  try {
    const data = await req.json()
    const updatedMember = await prisma.user.update({
      where: { id: params.id },
      data,
    })
    return NextResponse.json(updatedMember)
  } catch (error) {
    return NextResponse.json({ error: 'Error updating member' }, { status: 500 })
  }
}

export async function DELETE(req: Request, { params }: { params: { id: string } }) {
  try {
    await prisma.user.delete({
      where: { id: params.id },
    })
    return NextResponse.json({ message: 'Member deleted successfully' })
  } catch (error) {
    return NextResponse.json({ error: 'Error deleting member' }, { status: 500 })
  }
}
import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function GET(req: Request) {
  try {
    const members = await prisma.user.findMany({
      where: { role: 'MEMBER' },
      select: {
        id: true,
        name: true,
        email: true,
        approved: true,
        membershipType: true,
      },
    })
    return NextResponse.json(members)
  } catch (error) {
    return NextResponse.json({ error: 'Error fetching members' }, { status: 500 })
  }
}

export async function POST(req: Request) {
  try {
    const data = await req.json()
    const newMember = await prisma.user.create({
      data: {
        ...data,
        role: 'MEMBER',
      },
    })
    return NextResponse.json(newMember)
  } catch (error) {
    return NextResponse.json({ error: 'Error creating member' }, { status: 500 })
  }
}
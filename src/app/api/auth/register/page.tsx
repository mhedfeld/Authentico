// app/api/auth/register/route.ts
import { NextResponse } from "next/server"
import { hash } from "bcryptjs"
import { prisma } from "@/lib/prisma"

export async function POST(req: Request) {
  try {
    const { name, email, password } = await req.json()
    
    // Check if user exists
    const existingUser = await prisma.user.findUnique({
      where: {
        email,
      },
    })
    
    if (existingUser) {
      return NextResponse.json(
        { message: "User with this email already exists" },
        { status: 409 }
      )
    }
    
    // Hash password
    const hashedPassword = await hash(password, 10)
    
    // Create user
    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
      select: {
        id: true,
        name: true,
        email: true,
      },
    })
    
    return NextResponse.json(
      { 
        message: "User registered successfully",
        user
      },
      { status: 201 }
    )
  } catch (error) {
    console.error("REGISTRATION ERROR:", error)
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    )
  }
}

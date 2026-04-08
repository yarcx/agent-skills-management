import { generateToken, setAuthCookie } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email, name, password } = body
    if (!email || !name || !password) {
     return NextResponse.json({
        message: 'All fields are required',
      }, { status: 400 })
    }
    const user = await prisma.user.findUnique({
      where: {email}
    })
    if (user) {
      return NextResponse.json({message: 'User already exists'}, {status: 400})
    }
    const genSalt = await bcrypt.genSalt(10)
    const hashPassword = await bcrypt.hash(password, genSalt)
    const newUser = await prisma.user.create({
      data: {email, name, password: hashPassword}
    })
    const genToken = generateToken({ name: newUser?.name, email: newUser.email, id: newUser.id })
    const response = NextResponse.json({user: newUser, token: genToken}, {status: 201})
    setAuthCookie(response, genToken)
    return response
  } catch (error) {
    console.log(error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
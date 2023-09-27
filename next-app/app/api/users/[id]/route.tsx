import { NextRequest, NextResponse } from 'next/server';
import schema from '../schema';
import prisma from '@/prisma/client';

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const user = await prisma.user.findUnique({
    where: { id: params.id },
  });

  // Fetch data from a db
  // If not found, return 404 error
  // Else, return actual data
  if (!user)
    return NextResponse.json({ error: 'User not found' }, { status: 404 });

  return NextResponse.json(user);
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  // Validate request body
  const body = await request.json();
  // If invalid, return 400
  const validation = schema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });
  // Fetch the user with the given id
  // If doesn't exist, return 404

  const user = await prisma.user.findUnique({
    where: { id: params.id },
  });

  if (!user)
    return NextResponse.json({ error: 'User not found' }, { status: 404 });
  // Else, Update the user
  // Return the updated user

  const updatedUser = await prisma.user.update({
    where: { id: user.id },
    data: {
      name: body.name,
      email: body.email,
    },
  });

  return NextResponse.json(updatedUser);
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {


  // Fetch user from db
  const user = await prisma.user.findUnique({
    where: { id: params.id },
  });

  // If not found, return 404
  if (!user)
    return NextResponse.json({ error: 'User not found ' }, { status: 404 });
  
  // Else, delete user from db
  await prisma.user.delete({
    where: { id: user.id },
  });
  
  // Return 200 response
  return NextResponse.json({});
}

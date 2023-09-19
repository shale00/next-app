import { NextRequest, NextResponse } from 'next/server';

export function GET(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  // Fetch data from a db
  // If not found, return 404 error
  // Else, return actual data
  if (params.id > 10)
    return NextResponse.json({ error: 'User not found' }, { status: 404 });

  return NextResponse.json({ id: 1, name: 'Scott' });
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  // Validate request body
  const body = await request.json();
  // If invalid, return 400
  if (!body.name)
    return NextResponse.json({ error: 'Name is required' }, { status: 400 });
  // Fetch the user with the given id
  // If doesn't exist, return 404
  if (params.id > 10)
    return NextResponse.json({ error: 'User not found' }, { status: 404 });
  // Else, Update the user
  // Return the updated user
  return NextResponse.json({ id: 1, name: body.name });
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  // Fetch user from db
  // If not found, return 404
  if (params.id > 10)
    return NextResponse.json({ error: 'User not found ' }, { status: 404 });
  // Else, delete user from db
  // Return 200 response
  return NextResponse.json({});
}

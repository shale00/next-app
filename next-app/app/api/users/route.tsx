import { NextRequest, NextResponse } from 'next/server';

export function GET(request: NextRequest) {
  // fetch users from a dd
  return NextResponse.json([
    { id: 1, name: 'Scott' },
    { id: 2, name: 'Katee' },
  ]);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  // Once we read the body of the request
  // Need to Validate
  // If invalid, return 400
  // Else, return data

  if (!body.name)
    return NextResponse.json({ error: 'Name is required' }, { status: 400 });

  return NextResponse.json({ id: 1, name: body.name }, { status: 201 });
}

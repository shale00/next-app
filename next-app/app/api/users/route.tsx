import { NextRequest, NextResponse } from "next/server";

export function GET(request: NextRequest) {
    // fetch users from a dd
    return NextResponse.json([
        { id: 1, name: 'Scott' },
        { id: 2, name: 'Katee' }
    ])
}
import { NextResponse } from 'next/server';
import  client  from '@/db'; // Adjust import based on your setup

export async function PUT(request: Request, { params }: { params: { id: string } }) {
  try {
    const { completed } = await request.json();
    
    // Update todo status in the database
    const updatedTodo = await client.todo.update({
      where: { id: Number(params.id) },
      data: { completed },
    });

    return NextResponse.json(updatedTodo);
  } catch (error) {
    console.error('Error updating todo:', error);
    return NextResponse.error();
  }
}

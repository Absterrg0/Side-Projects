import client from '@/db'
import { NextRequest, NextResponse } from 'next/server';

export async function GET(){
    try{
        const user = await client.todo.findMany({})
        return NextResponse.json(
            user
        )
    }catch(e){
        console.log(e);
    }
}


export async function DELETE() {
  try {
    await client.todo.deleteMany(); // Delete all rows in the `todo` table
    return NextResponse.json({ message: 'All todos deleted' });
  } catch (error) {
    console.error('Error deleting todos:', error);
    return NextResponse.error();
  }
}
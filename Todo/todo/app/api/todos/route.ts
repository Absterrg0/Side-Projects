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
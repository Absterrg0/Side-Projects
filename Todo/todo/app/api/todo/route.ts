import client from '@/db'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req:NextRequest){
    const body = await req.json()
    const todo = await client.todo.create({
        data:{
            title:body.title,
            description:body.description,
            completed:false
        }
    })
    console.log("Todo successfully created")
    return NextResponse.json({
        todo
    })
}
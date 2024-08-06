"use client"

import { useState } from "react";
import axios from 'axios'

export default function CreateTodo() {
    const [title,setTitle]=useState("");
    const [description,setDescription]=useState("")

    const handleClick = async ()=>{
        try{
            const res = await axios.post("http://localhost:3000/api/todo",{
                title,
                description
            })
            alert("Todo Added")
        }catch(e){
            console.error(e)
            alert("Error adding todo")
        }
    }
    const handleDelete= async ()=>{
        try{
            const res = await axios.delete("http://localhost:3000/api/todos")
        }catch(e){
            console.error(e)
        }
    }
    return (
        <div>
            <div className="border-2 rounded p-4">
                <div className="flex flex-col mb-4">
                    <label className="text-xl mb-2">Title:</label>
                    <input onChange={(e)=>{
                        setTitle(e.target.value)
                    }} className="border-2 p-2" type="text" placeholder="Set Title" />
                </div>
                <div className="flex flex-col mb-4">
                    <label className="text-xl mb-2">Description:</label>
                    <input onChange={(e)=>{
                        setDescription(e.target.value)
                    }} className="border-2 p-2" type="text" placeholder="Set Description" />
                </div>
                    <div className="flex justify-between">
                    <button onClick={handleClick} className="bg-gray-800 text-white p-2 rounded ">Create Todo</button>
                    <button onClick={handleDelete} className="bg-gray-800 text-white p-2 rounded ">Delete All Todo</button>
                    </div>
                
            </div>
        </div>
    );
}

"use client"

import React, { useEffect, useState } from 'react'
import { getTodos } from './api';

interface Todo {
    id : number,
    firstName : string
}

const Services = () => {

    const [users,setTodos] = useState([]);

    useEffect(()=>{
        (async ()=>{
            setTodos(await getTodos())
        })()
    },[])

  return (
    <div className='flex w-full justify-center py-4'>
        <ul className='flex flex-col w-[60%]  gap-2'>
            {users && users.map((todo:Todo)=><li key={todo.id} className='flex justify-center bg-slate-700 text-xl'>{todo.firstName}</li>)}
        </ul>
    </div>
  )
}

export default Services
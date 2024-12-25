"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const Layout = ({ children }: { children: React.ReactElement }) => {

    const pathname = usePathname()

    return (
        <div className='flex w-full flex-col items-center'>
            <div className='flex w-[90%] bg-slate-600 h-[40%]'>{children}</div>
        </div>
    )
}

export default Layout
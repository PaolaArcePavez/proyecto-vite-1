import React from 'react'
import {RiSearch2Line} from "react-icons/ri"


const Header = () => {
  return (
    <header className='flex flex-col md:flex-row itms-center justify-between gap-4'>
        <h1 className='text-2xl md:dtext-3xl font-blod'>
            Tu Lugar<span className='text-neutral-400'> Andres</span></h1>
        <form className='w-full md:w-auto'>
            <div className='relative'>
            <RiSearch2Line className='absolute top-1/2 -translate-y-1/2 left-2'/>
                <input 
                type="text" 
                className='bg-gray-200 outline-none py-2 pl-8 pr-4 rounded-xl w-full md:w-auto'
                placeholder='Buscar' />
            </div>
        </form>

    </header>
  )
}

export default Header
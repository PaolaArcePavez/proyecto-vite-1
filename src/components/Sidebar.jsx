import React from 'react'
//icons a los icons hay que poner un /ri
import { RiHome3Line } from "react-icons/ri";
const Sidebar = () => {
    return(
        <div className="bg-primary-900 h-full 
        ">
            {/*PERFIL*/}
            <div className='flex flex-col items-center justify-center p-8 gap-2 h-[30wh]'>
                <img src='https://cdn-icons-png.flaticon.com/512/26/26501.png' className='w-30 h-30 object-cover rounded-full' />
            <h1 className='text-l text-white font-bold'>Sin Nombre</h1>
            <p className='bg-primary-100 py-1 px-3 rounded-full justify-center txt-white'>
            boton
            </p>
            </div>
            {/*NAV*/}
            <div className='bg-primary-300 p-8 rounded-tr-[100px] h-[70wh] overflow-y-scroll'>
           <nav >
                <a href="#" className='flex items-center gap-4 text-white py-2 px-2 rounded-xl hover:bg-primary-900/50 transition-color' >
                    < RiHome3Line /> Home
                </a>
            </nav>
            <div className='bg-primary-900/50'>
               <p>Lo que sea</p> 
               <a href="#">contacto</a>
            </div>
            </div>
        </div>
    )

}

export default Sidebar
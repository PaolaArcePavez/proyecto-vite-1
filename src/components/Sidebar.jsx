import React, { useState } from "react";
//icons a los icons hay que poner un /ri
import {
  RiHome3Line,
  RiFileCopyLine,
  RiShoppingBasket2Line,
  RiShoppingCart2Line,
  RiMenuFoldFill,
  RiReplyAllLine,
} from "react-icons/ri";

const Sidebar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      <div
        className={`bg-primary-900 h-full fixed lg:static w-[80%] md:w-[40%] lg:w-full transition-all z-50 duration-300 ${
          showMenu ? "left-0" : "-left-full"
        }`}
      >
        {/*PERFIL*/}
        <div className="flex flex-col items-center justify-center p-8 gap-2 h-[30wh]">
          <img
            src="https://img.freepik.com/foto-gratis/disparo-vertical-carretera-medio-edificios-japon_181624-46775.jpg"
            className="w-20 h-20 object-cover rounded-full ring-2 ring-primary-300"
          />
          <h1 className="text-xl text-white font-bold">Andres</h1>
          <p className="bg-primary-100 py-2 px-4 rounded-full justify-center text-white">
            Usuario
          </p>
        </div>
        {/*NAV*/}
        <div className="bg-primary-300 p-8 rounded-tr-[100px] h-[70vh]  flex flex-col justify-between gap-8 ">
       
         <nav className="flex flex-col gap-8">
            <a
              href="#"
              className="flex items-center gap-4 text-white py-2 px-4 rounded-xl hover:bg-primary-900/50 transition-colors"
            >
              <RiHome3Line /> Inicio
            </a>
            <a
              href="#"
              className="flex items-center gap-4 text-white py-2 px-4 rounded-xl hover:bg-primary-900/50 transition-colors"
            >
              <RiFileCopyLine /> Producto
            </a>
            <a
              href="#"
              className="flex items-center gap-4 text-white py-2 px-4 rounded-xl hover:bg-primary-900/50 transition-colors"
            >
              <RiShoppingBasket2Line /> Venta
            </a>
            <a
              href="#"
              className="flex items-center gap-4 text-white py-2 px-4 rounded-xl hover:bg-primary-900/50 transition-colors"
            >
              <RiShoppingCart2Line /> Compra
            </a>
          </nav>
          <div className="bg-primary-900/50 text-white p-4 rounded-xl">
            <p className="text-gray-600">Lo que sea</p>
            <a href="#">Contacto</a>
          </div>
        </div>
      </div>
      {/*Botón móvil */}
      <button
        onClick={() => setShowMenu(!showMenu)}
        className="lg:hidden fixed right-4 bottom-4 text-xl bg-primary-900 p-2.5 rounded-full txt-white z-50" >
        {showMenu ? <RiMenuFoldFill /> : <RiReplyAllLine />}
      </button>
    </>
  );
};

export default Sidebar;

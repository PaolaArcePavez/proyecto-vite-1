import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import { RiLineChartLine, RiHashtag } from "react-icons/ri";

function App() {
  return (
    <div className="grid lg:grid-cols-3 xl:grid-cols-6 min-h-screen">
      <Sidebar />
      <main className="lg:col-span-3 xl:col-span-5 bg-gray-100 p-8 h-[100vh] overflow-y-scroll ">
        <Header />
        {/*Section 1 */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-10 gap-8">
          {/*card 1 */}
          <div className="bg-primary-100 p-4 rounded-xl text-gray-300 flex flex-col gap-4">
            <RiLineChartLine className="text-5xl" />
            <h4 className="text-2xl">Ganado</h4>
            <div className="text-5xl">&euro; 350</div>
            <span className="py-1 px-3 bg-primary-300/50 rounded-full">
              Cantidad ganada
            </span>
          </div>
          {/*card 2*/}
          <div className="p-6 bg-white rounded-xl flex flex-col justify-between gap-4 shadow-2xl">
            <div className="bg-primary-100/30 rounded-xl p-4 flex items-center gap-4">
              <span className=" bg-primary-100 text-primary-300 text-2xl font-bold p-4 rounded-2xl">
                10
              </span>
              <div>
                <h4 className="font-bold">Más Vendido</h4>
                <p className="text-gray-400">Catan</p>
              </div>
            </div>
            <div className="bg-primary-100/30 rounded-xl p-4">
              <div className="flex items-center gap-4 mb-4">
                <span className=" bg-primary-100 text-primary-300 text-2xl font-bold p-4 rounded-2xl">
                  05
                </span>
                <div>
                  <h4 className="font-bold">Quedan</h4>
                  <p className="text-gray-400">Catan</p>
                </div>
              </div>
              <div className="flex justify-center gap-2 ">
                <span className="bg-primary-100/20 py-1 px-2 rounded-full text-xs">
                  Movil App
                </span>
                <span className="bg-primary-100/20 py-1 px-2 rounded-full text-xs">
                  Marcas
                </span>
              </div>
            </div>
          </div>
          {/*card 3 */}
          <div className="col-span-1 md:col-span-2 flex flex-col justify-between">
            <h1 className="text-2xl font-bold mb-8">Tus Compras</h1>
            <div className="bg-white p-6 rounded-xl shadow-2xl">
              <div className="flex items-center gap-4 mb-6">
                <img
                  src="https://img.utdstc.com/icon/8e6/e42/8e6e42582133d5c6d1f7d7ca2076c045af6a464f9a052153d156443920f75e9d:100"
                  className="w-12 h-12 object-cover rounded-full"
                />
                <div>
                  <h3 className="font-bold ">AGE OF EMPIRES</h3>
                  <p className="text-gray-400">Hace un mes</p>
                </div>
              </div>
              <div className="flex items-center gap-4 mb-6">
                <img
                  src="https://www.aobo-shop.es/203-thickbox_default/gomoku-juego-5-piedras.jpg"
                  className="w-12 h-12 object-cover rounded-full"
                />
                <div>
                  <h3 className="font-bold ">GOMOKU O JUEGO DE 5 PIEDRAS</h3>
                  <p className="text-gray-400">Cuatro Meses</p>
                </div>
              </div>
              <div className="flex justify-end">
                <a
                  href="#"
                  className="hover:text-primary-100 transition-colors hover:underline "
                >
                  Otras Compras
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* Section 2*/}
        <section className="grid grid-cols-1 md:grid-cols-2  mt-10 gap-8">
          <div>
            <h1 className="text-2xl font-bold mb-8">Facturas Recientes</h1>
            <div className="bg-white p-6 rounded-xl shodow-2xl mb-8">
              {/*card 1 */}
              <div className="grid grid-cols-1 xl:grid-cols-4 items-center  gap-4 mb-4">
                <div className="col-span-2 flex items-center gap-4">
                  <img
                    src="https://juegosdelamesaredonda.com/104-21774-large_default/los-colonos-de-catan-edicion-2015.jpg"
                    className="w-12 h-12 object-cover rounded-xl"
                  />
                  <div>
                    <h3 className="font-bold ">CATAN</h3>
                    <p className="text-gray-400">Miguel Herández</p>
                  </div>
                </div>
                <div>
                  <span className="bg-stone-300 text-lime-600 py-1 px-3 rounded-full font-medium">
                    Pagado
                  </span>
                </div>
                <div>
                  <span className="font-bold">&euro; 45</span>
                </div>
              </div>
              {/*card 2 */}
              <div className="grid grid-cols-1 xl:grid-cols-4 items-center  gap-4 mb-4">
                <div className="col-span-2 flex items-center gap-4">
                  <img
                    src="https://m.media-amazon.com/images/I/61E-HzoNwdS._AC_SX425_.jpg"
                    className="w-12 h-12 object-cover rounded-xl"
                  />
                  <div>
                    <h3 className="font-bold ">DUNE Imperium</h3>
                    <p className="text-gray-400">Sofía Castro</p>
                  </div>
                </div>
                <div>
                  <span className="bg-rose-200 text-red-600 py-1 px-3 rounded-full font-medium">
                    Pendiente
                  </span>
                </div>
              <div>
                  <span className="font-bold">&euro; 50</span>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between flex-wrap xl:flex-nowrap gap-6 bg-primary-900 text-primary-300 p-8 rounded-xl shadow-2xl ">
              <div>
                <RiHashtag className="text-6xl -rotate-12" />
              </div>
              <div>
                <h5 className="font-bold text-primary-300">
                  Interactuar con los Clientes
                </h5>
                <h5>Unirse a Slack</h5>
              </div>
              <div>
                <button className="bg-primary-100 py-2 px-4 rounded-xl text-primary-300 w-full">
                  Unete ahora
                </button>
              </div>
            </div>
          </div>
          
        </section>
      </main>
    </div>
  );
}

export default App;

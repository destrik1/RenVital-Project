import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";

function NavBar() {
  return (
    <>
      <nav className="bg-white border-gray-200 bg-gradient-to-b  from-teal-300/60">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src={logo} className="h-12" alt="RenVital Logo" />
            <div className="flex flex-col text-black font-semibold">
              <span className="text-2xl whitespace-nowrap">RenVital</span>
            </div>
          </a>
          <div className="hidden w-full md:block md:w-auto">
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 ">
              <li>
                <Link
                  to={"/"}
                  className="hover:scale-[1.1] block py-2 px-3 text-black rounded md:p-0 "
                >
                  Inicio
                </Link>
              </li>

              <li>
                <Link
                  to={"/info"}
                  className="hover:scale-[1.1] block py-2 px-3 text-black rounded md:p-0 "
                >
                  Infórmate
                </Link>
              </li>
              <li>
                <Link
                  to={"/comunidad"}
                  className="hover:scale-[1.1] block py-2 px-3  text-black rounded md:p-0 "
                >
                  Comunidad
                </Link>
              </li>
              <li>
                <a
                  href="/Comida"
                  className="hover:scale-[1.1] block py-2 px-3  text-black rounded md:p-0 "
                >
                  Alimentación
                </a>
              </li>
              <li>
                <Link
                  to={"/login"}
                  className="hover:scale-[1.1] block py-2 px-3  text-black rounded md:p-0 "
                >
                  Login
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;

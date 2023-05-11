import { useContext, useState } from "react";
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import logo from "../../../../assets/logo.svg";
import { Link } from "react-router-dom";
import { CarContext } from "../../../providers/AuthProviders";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const {user, userLogOut} =  useContext(CarContext);

  const logOut = ()=>{
    userLogOut()
    .then(result=> console.log('logout successfully'))
    .catch(error=> console.log(error.message))
  }
  return (
    <header className="bg-gray-100 font-Nunito z-20 relative">
      <div className="container mx-auto flex justify-between items-center px-4 py-6">
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="w-10 h-10" />
          <h1 className="text-xl ml-2 font-bold">Car Doctor</h1>
        </div>
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            <li>
              <Link to="/" className="hover:text-gray-400">
                Home
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-gray-400">
                About
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-gray-400">
                Services
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-gray-400">
                Blog
              </Link>
            </li>

            {
              user ?  <li className="flex items-center space-x-3" onClick={logOut}>
              <Link to="/" className="hover:text-gray-400">
                Logout
              </Link>
              <p>
                {user.displayName}
              </p>
            </li>

            : <li>
            <Link to="/login" className="hover:text-gray-400">
              Login
            </Link>
          </li>
            }

          </ul>
        </nav>
        <div className="flex items-center">
        <button className="btn btn-outline btn-error normal-case hidden md:block">Appointment</button>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden focus:outline-none"
          >
            {isMenuOpen ? (
              <IoMdClose className="text-2xl" />
            ) : (
              <FaBars className="text-2xl" />
            )}
          </button>
        </div>
        {isMenuOpen && (
          <nav className="md:hidden absolute top-16 left-0 right-0 bg-gray-100">
            <ul className="flex flex-col items-center py-4 space-y-5">
            <li>
              <Link to="/" className="hover:text-gray-400">
                Home
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-gray-400">
                About
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-gray-400">
                Services
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-gray-400">
                Blog
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-gray-400">
                Contact
              </Link>
            </li>


              <div className="max-w-5xl">
              <button className="lg:hidden w-full bg-white text-gray-900 py-2 px-4 rounded-md shadow mr-4 hover:bg-gray-200 focus:outline-none">
                Button
              </button>
              </div>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;

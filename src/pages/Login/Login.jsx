import { Link } from 'react-router-dom';
import img from '../../../assets/images/login/login.svg'
import { useContext } from 'react';
import { CarContext } from '../../providers/AuthProviders';


const  Login = () => {
  const {userLogin} = useContext(CarContext)
  const handleLoginSubmit = (e)=>{
    e.preventDefault()
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    userLogin(email,password)
    .then(result=> console.log(result.user))
    .catch(error => console.log(error.message))
    console.log(email,password)
  }
    return (
        <div className="flex h-screen bg-gray-100 items-center justify-center">
      <div className="hidden lg:block w-1/2">
        <img src={img} alt="Login Image" className=" object-cover mx-auto h-[400px]" />
      </div>
      <div className="flex flex-col w-full  md:w-1/2 h-3/4 px-8">
        <div className="mx-auto w-full ">
          <div className="text-center font-bold text-2xl mb-6">
            Welcome Back!
          </div>
          <form onSubmit={handleLoginSubmit} className="bg-white shadow-md rounded p-20 mb-4 h-full w-full">
          <div className="mb-4">
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="email"
                >
                  email
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="username"
                  type="email"
                  placeholder="email"
                  name='email'
                  required
                />
              </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="Password"
                name='password'
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Sign In
              </button>
              <a
                className="inline-block align-baseline font-bold text-sm text-orange-500 hover:text-orange-800"
                href="#"
              >
                Forgot Password?
              </a>
            </div>
            <p className="mt-4">
                new to doctor car <Link className="text-red-500" to="/signUp">Sign Up</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
    );
};

export default Login;
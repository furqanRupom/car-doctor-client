import { Link } from 'react-router-dom';
import img from '../../../assets/images/login/login.svg'
import { useContext } from 'react';
import { CarContext } from '../../providers/AuthProviders';



const  Register = () => {
  const {userRegister,updateUserProfile} = useContext(CarContext)
  const handleRegisterSubmit = (e)=>{
    e.preventDefault()
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirm = form.confirm.value;

    console.log(email,password)
    if(password != confirm){
      alert('password did not matched')
      return
    };

    userRegister(email,password)
    .then(result => {
      const loggedUser = result.user;
       loggedUser.displayName = name;
      updateUserProfile({
        displayName:loggedUser.displayName
      })

    })
    .catch(error => console.log(error.message))
  }
    return (
        <div className="flex py-20 bg-gray-100 items-center justify-center">
        <div className="hidden lg:block w-1/2">
          <img src={img} alt="Login Image" className=" object-cover mx-auto h-[400px]" />
        </div>
        <div className="flex flex-col w-full  md:w-1/2 h-3/4 px-8">
          <div className="mx-auto w-full ">
            <div className="text-center font-bold text-2xl mb-6">
              Sign Up now
            </div>
            <form onSubmit={handleRegisterSubmit} className="bg-white shadow-md rounded p-20 mb-4 h-full w-full">
              <div className="mb-4">
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="username"
                >
                  Username
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="username"
                  type="text"
                  placeholder="Username"
                  name='name'
                  required
                />
              </div>
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
                  required
                />
              </div>
              <div className="mb-6">
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="password"
                >
                  confirm Password
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="Cpassword"
                  type="password"
                  placeholder="confirm Password"
                  name='confirm'
                  required
                />
              </div>
              <div className="flex items-center justify-between">
                <button
                  className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Sign Up
                </button>

              </div>
              <p className="mt-4">
                  Already Have an account? <Link className="text-red-500" to="/login">Sign In</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    );
};

export default Register;
import { useContext } from 'react';
import { FaMapMarkerAlt, FaCar, FaPhone, FaEnvelope, FaCcVisa, FaCcMastercard, FaCcDiscover, FaCcAmex } from 'react-icons/fa';
import { CarContext } from '../../providers/AuthProviders';
import { useLoaderData } from 'react-router-dom';

const Checkout = () => {
  const {price,title,service_id,img} = useLoaderData()
  const data = useLoaderData()
  console.log(data)
  const {user} = useContext(CarContext)

  const handleCheckout = (e)=>{
    e.preventDefault()
    const form = e.target;
    const name = form.name.value;
    const email = user?.email;
    const address = form.address.value;
    const date = form.date.value;
    const price= form.price.value;

    const customerInfo = {
      customerName:npame,
      email,
      customerAddress:address,
      date,
      serviceName:title,
      servicesID:service_id,
      serviceCharge:price,
      image:img
    }

    console.log(customerInfo)

    fetch('http://localhost:5000/bookings',{
      method:'POST',
      headers:{
        'content-type':'application/json'
      },
      body:JSON.stringify(customerInfo)

    })
    .then(res => res.json())
    .then(data => console.log(data))
  }


  return (
    <form onSubmit={handleCheckout} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 my-48">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Checkout Form</h2>
      <div className="flex flex-col lg:flex-row mb-4 md:space-x-3">
        <div className="w-full sm:w-1/2 mb-4 sm:mb-0">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
            Full Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            required
            type="text"
            placeholder="Enter your full name"
            name='name'
            defaultValue={user?.displayName}
          />
        </div>
        <div className="w-full sm:w-1/2">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
            Email Address
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            required
            type="email"
            placeholder="Enter your email address"
            name='email'
            defaultValue={user?.email}
          />
        </div>
      </div>
      <div className="flex flex-col lg:flex-row mb-4 md:space-x-3">
        <div className="w-full sm:w-1/2 mb-4 sm:mb-0">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="phone">
            Date
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="phone"
            required
            type="date"
            name='date'

          />
        </div>
        <div className="w-full sm:w-1/2">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="address">
            Address
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="address"
            required

            placeholder="Enter your address"
            name='address'
          />
        </div>
      </div>




            <div className="flex flex-col lg:flex-row mb-4">
            <div className="w-full">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="cvv">
            rate
            </label>
            <input
                     className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                     id="cvv"
                     required
                     type="text"
                     placeholder="services rate"
                     name='price'
                     defaultValue={price}
                   />
            </div>
            </div>
            <div className="flex items-center justify-between">
            <button
                   className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                   type="submit"
                 >
            Checkout
            </button>
            </div>
            <div className="mt-4">
            <p className="text-gray-700 font-bold mb-2">Accepted Payment Methods</p>
            <div className="flex items-center">
            <FaCcVisa className="text-4xl text-orange-500 mr-4" />
            <FaCcMastercard className="text-4xl text-red-500 mr-4" />
            <FaCcDiscover className="text-4xl text-orange-500 mr-4" />
            <FaCcAmex className="text-4xl text-orange-800" />
            </div>
            </div>
            </form>
            );
            };

            export default Checkout;

import { useContext, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { CarContext } from "../../providers/AuthProviders";
import BookingsRaw from "../BookingsRaw/BookingsRaw";

const  Bookings = () => {
    const {user} = useContext(CarContext)
    const [bookings,setBookings] = useState([]);
    useEffect(()=>{
        fetch(`http://localhost:5000/bookings?email=${user.email}`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setBookings(data)
        })
    },[])


    const handleDelete = (id)=>{
        const procied = confirm('are you wanna to delete ?');
        if(procied){
            fetch(`http://localhost:5000/bookings/${id}`,{
                method:'DELETE'
            })
            .then(res=>res.json())
            .then(data => {
                if(data.deletedCount > 0){
                    alert('deleted successfully!')
                }
                const remaining = bookings.filter(bk => bk._id !== id)
                setBookings(remaining)
            })
        }
      }


      const handleConfirm = (id)=>{
        fetch(`http://localhost:5000/bookings/${id}`,{
            method:'PATCH',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify({status:'confirm'})
        })
        .then(res=>res.json())
        .then(data=> {
            console.log(data)
            const remainingConfirm = bookings.filter(booking => booking._id !==id)
            const confirmed = bookings.find(booking => booking._id === id)
            confirmed.status = 'confirm';
            const updatedBookings = [confirmed,...remainingConfirm]
            setBookings(updatedBookings)
        })
      }
    return (
        <div>
           <div className="overflow-x-auto w-full my-48">
            <div>
            </div>
  <table className="table w-full">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Price</th>
        <th>Date</th>
        <th></th>
      </tr>
    </thead>

        {
            bookings.map(booking => <BookingsRaw key={booking._id} booking={booking} handleDelete={handleDelete} handleConfirm={handleConfirm}/>)
        }

  </table>
</div>
        </div>
    );
};

export default Bookings;
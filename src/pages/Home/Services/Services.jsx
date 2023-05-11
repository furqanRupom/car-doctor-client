import { useEffect, useState } from "react";
import ServicesCard from "./ServicesCard";

const  Services = () => {
    const [services,setServices] = useState([]);
    useEffect(()=>{
        fetch('/public/services.json')
        .then(res => res.json())
        .then(data => setServices(data))

    },[])
    return (
        <div className="my-20">
            <div className="text-center">

                <h3 className="text-orange-500 font-bold py-3">Service</h3>
                <h1 className="text-4xl font-bold">Our Service Area</h1>
                <p className="leading-relaxed py-3">the majority have suffered alteration in some form, by injected humour, <br /> or randomised words which don't look even slightly believable. </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-12">
                {
                    services.map(service => <ServicesCard key={service._id} service={service} />)
                }
            </div>
        </div>
    );
};

export default Services;
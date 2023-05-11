import {FaSearch,FaArrowRight} from 'react-icons/fa'


const ServicesCard = ({ service }) => {
  const { title, price, img } = service;
  return (
    <div>
      <div className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out relative">
        <img src={img} alt={title} className="w-full h-56 object-cover" />
        <div className="px-4 py-4">
          <h2 className="text-2xl font-bold mb-2">{title}</h2>
          <div className="text-xl font-medium text-gray-700">${price}</div>
        </div>
        <div className="absolute bottom-5 right-3 text-orange-500">
            <FaArrowRight />
        </div>
      </div>
    </div>
  );
};

export default ServicesCard;

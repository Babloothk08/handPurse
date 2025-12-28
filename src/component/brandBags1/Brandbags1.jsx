import React from 'react';
import { data } from '../../data';
import { Link } from 'react-router-dom';

function Brandbags1() {

  const handedPrse = data.filter((item) => item.category === "brandBags")
  // console.log("abc", handedPrse)

  const handedPrseMap = new Map();
  // console.log(handedPrseMap)

  handedPrse.forEach((item) =>{
    if(!handedPrseMap.get(item.title)){
      handedPrseMap.set(item.title,{
        image : item.image,
        title : item.title,
        price : item.price
      });
    }
  });

  const uniqueCategory = (Array.from(handedPrseMap.values()))
  // console.log("uniquecategory", uniqueCategory)

  return (
    <div  className=" w-full py-16 bg-white" >
      <div className="max-w-[1300px] mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {uniqueCategory.map((item) => (
          <div
            key={item.id}
            className=" shadow-md rounded-lg hover:shadow-xl transition"
          >
            <Link to={`/DetailPage/${item.category}`} className='flex flex-col  items-center bg-white p-4 shadow-md rounded-lg hover:shadow-xl transition'>
            <img
              src={item.image}
              alt={item.title}
              className="h-[250px] w-full object-contain rounded-md mb-4"
            />
            <h1 className="text-xl font-semibold text-gray-800">{item.title}</h1>
            <p className="text-gray-600">{item.price}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Brandbags1;

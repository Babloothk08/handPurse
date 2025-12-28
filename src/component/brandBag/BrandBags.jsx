import React from 'react';
import { data } from '../../data';
import { Link } from 'react-router-dom';

function BrandBags() {

  const janicaPurse = data.filter((item) => item.category === "JanicaHandBags")
  // console.log("ahs",janicaPurse)

  const janicaMap = new Map();
  
  janicaPurse.forEach((item) => {
    if(!janicaMap.get(item.title)){
      janicaMap.set(item.title, {
        category : item.category,
        title : item.title,
        image : item.image,
        price : item.price
      });
    }
  });
  console.log("abb", janicaMap)

  const uniqueCategory = Array.from(janicaMap.values());
  console.log("uniqueCategory",uniqueCategory)


  return (
    <div className="w-full py-16 bg-white ">
      <div className="text-center mb-10 hover:bg-green-400">
        <h1 className="text-3xl font-semibold underline">Top Brand Bags</h1>
      </div>

      <div className="max-w-[1300px] mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6  ">
        {uniqueCategory.map((product) => (
          <Link to={`/DetailPage/$(item.category)`}>
          <div key={product.id} className="flex flex-col items-center bg-white p-4 shadow-lg rounded-lg hover:shadow-xl transition ">
            <img
              src={product.image}
              alt="Handbag"
              className="h-[250px] w-full object-contain mb-4 rounded-md "
            />
            <h2 className="text-xl font-semibold text-gray-800">{product.title}</h2>
            <p className="text-gray-600">${product.price}</p>
          </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default BrandBags;

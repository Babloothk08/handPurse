import React from "react";
import { CiSearch } from "react-icons/ci";
import { BsGrid3X3Gap } from "react-icons/bs";
import { MdMenu } from "react-icons/md";
import { data } from "../../data";
import { Link } from "react-router-dom";

function ShopPurse1() {
  const shopItems = data.filter((item) => item.category === "handBags");

  const shopItemsMap = new Map();
  shopItems.forEach((item) => {
    if (!shopItemsMap.get(item.title)) {
      shopItemsMap.set(item.title, {
        ...item,
      });
    }
  });
  const uniqueCategory = Array.from(shopItemsMap.values());

  return (
    <div className="min-h-screen w-full mt-20 px-4 md:px-10 lg:px-20">
      <div className="flex flex-col lg:flex-row gap-10">

        <div className="lg:w-1/4 flex flex-col gap-6">
         
          <div className="bg-gray-700 p-4 rounded-lg flex items-center gap-2">
            <input
              type="text"
              placeholder="Search Here"
              className="flex-1 p-2 rounded-md outline-none"
            />
            <CiSearch className="text-2xl text-white" />
          </div>

          <div className="bg-gray-700 p-4 rounded-lg text-white">
            <h1 className="text-2xl font-bold mb-2">Category</h1>
            <p className="text-lg">Handbags</p>
          </div>

          <div className="bg-gray-700 p-4 rounded-lg text-white">
            <h1 className="text-2xl font-bold mb-4">Filter by price</h1>
            <div className="flex justify-between">
              <p>Price: OS -- SOS</p>
            </div>
          </div>
        </div>

        <div className="lg:w-3/4 flex flex-col gap-6">

          <div className="flex justify-between items-center flex-wrap gap-4">
            <button className="bg-gray-700 text-white px-4 py-2 rounded-lg">
              Default Choice
            </button>
            <div className="flex gap-3 text-2xl">
              <BsGrid3X3Gap className="cursor-pointer" />
              <MdMenu className="cursor-pointer" />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {uniqueCategory.map((item) => (
              <Link
                to={`/DetailPage/${item.category}`}
                key={item.title}
                className="bg-white rounded-lg shadow hover:shadow-2xl transition-shadow duration-300 flex flex-col items-center p-4"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-60 object-cover rounded-md mb-2"
                />
                <h1 className="text-lg font-semibold text-center">{item.title}</h1>
                <p className="text-gray-700">{item.price}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShopPurse1;

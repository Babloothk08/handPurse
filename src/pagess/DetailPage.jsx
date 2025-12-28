import React from "react";
import { BsCart } from "react-icons/bs";
import { SlEnergy } from "react-icons/sl";
import { data } from '../data';
import { useParams } from "react-router-dom";

function DetailPage() {
const { id } = useParams(); //get the id from the URL
const itemId = parseInt(id); //convert id from string to number

// find the matching item
const item = data.find((d) => d.id === itemId);
if(!item){
    return <p className="text-center text-red-600 mt-10">Item not found.</p>;
}

    

  return (
    <div className="  w-[90%] mx-auto pt-10 ">
      <div>
        <div className="flex flex-row  w-full h-full justify-center ">
          <div className="w-full h-60%">
            <img
              src="{item.image}"
              alt="image"
            />
          </div>
          <div className="w-full">
            <div className="w-1/3 h-[35%]">
              <img
                src="{item.image1}"
                alt="image"
              />
            </div>
            <div className="w-1/3 h-[35%]">
              <img
                src="{item.image2}"
                alt="image"
              />
            </div>
            <div className="w-1/3 h-[35%]">
              <img
                src="{item.image3}"
                alt="image"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-start gap-60   pt-17 text-white font-bold">
          <div className="flex h-15 w-90 bg-yellow-600 text-center items-center justify-center gap-2 text-xl  cursor-pointer">
            <BsCart />
            <button>Add To Cart</button>
          </div>
          <div className="flex  h-15 w-90 bg-orange-500 justify-center items-center gap-2 text-xl cursor-pointer">
            <SlEnergy />
            <button>BUY NOW</button>
          </div>
        </div>
      </div>
      <div className="pt-20">
        <h1>Choose your Brand as per your Choice</h1>
        <p>Price - Rs1000</p>
        <p>Handbags - Discover the latest collection of Lavie World's handbags for women, featuring the best branded handbags at unbeatable discounts.</p>
      </div>
    </div>
  );
}

export default DetailPage;

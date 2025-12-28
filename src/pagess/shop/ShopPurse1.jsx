import React from "react";
import { CiSearch } from "react-icons/ci";
import { BsGrid3X3Gap } from "react-icons/bs";
import { MdMenu } from "react-icons/md";
import { data } from "../../data";
import { Link } from "react-router-dom";

function ShopPurse1() {
  const shopItems = data.filter((item) => item.category === "handBags");
  console.log(shopItems);

  const shopItemsMap = new Map();
  console.log("ab", shopItemsMap);

  shopItems.forEach((item) => {
    if (!shopItemsMap.get(item.title)) {
      shopItemsMap.set(item.title, {
        category: item.category,
        image: item.image,
        title: item.title,
        price: item.price,
      });
    }
  });

  const uniqueCategory = Array.from(shopItemsMap.values());
  console.log(uniqueCategory);



  return (
    <div className=" min-h-screen w-full mt-18">
      <div className="flex flex-col  xl:flex xl:flex-row 2xl:flex 2xl:flex-row">


        {/* .................Left Part..................... */}
        <div className="   xl:sticky xl:top-10 bg-gray-200 h-fit px-2 ml-3 flex flex-col gap-8 py-8">
          {/* .........Search Bar.......... */}
          <div className="bg-[#5D5F62] h-[140px] w-[430px] md:w-[730px] 2xl:w-[430px] xl:w-[430px] flex justify-between items-center text-2xl px-9 ">
            <div className="bg-white flex flex-row justify-between  items-center px-4 h-[45px] w-[350px] md:w-[650px] md:h-[55px] 2xl:w-[430px] xl:w-[430px]">
              <div className="">
                <input type="text" placeholder="Search Here"></input>{" "}
              </div>
              <div className="">
                <CiSearch />
              </div>
            </div>
          </div>

          {/* .........Category.......... */}
          <div className="bg-[#5D5F62] h-[150px] w-[430px] md:w-[730px] 2xl:w-[430px] xl:w-[430px] flex flex-col gap-8 px-9 py-5 content-center ">
            <h1 className="text-white text-4xl  ">Category</h1>
            <p className="text-white text-xl">Handbag</p>
          </div>

          {/* .........Filter By Price.......... */}
          <div className="bg-[#5D5F62] h-[200px] w-[430px] md:w-[730px] 2xl:w-[430px] xl:w-[430px] flex flex-col  gap-18 px-9 text-white">
            <div className="text-4xl pt-5 ">
              <h1>Filter by price</h1>
            </div>
            <div className="flex flex-row justify-between">
              <h2 className="text-3xl">Filter</h2>
              <p>Price:OS -- SOS</p>
            </div>
          </div>
        </div>

        {/* .........................Right Part................... */}

        <div className="flex flex-col gap-13">
          <div className="flex flex:row justify-between px-20 max-sm:px-4 py-8 pb-10">
            <div className="bg-[#5D5F62] text-white text-xl text-center content-center h-15 w-[180px]">
              {/* <Link to="/default">
                           <button>Default Choice</button>
                        </Link> */}
              <button>Default Choice</button>
            </div>
            <div className="flex flex-row text-3xl gap-3 ">
              <div className=" h-[50px] w-[50px  pt-2">
                <BsGrid3X3Gap />
              </div>
              <div className="text-5xl h-[50px] w-[50px] ">
                <MdMenu />
              </div>
            </div>
          </div>

          <div className="flex flex-row flex-wrap w-full mx-auto h-min-full">
            {uniqueCategory.map((item) => (
              <div key={item.id}>
                <div className="flex flex-row flex-wrap hover:shadow-2xl">
                  <Link to={`/DetailPage/${item.category}`}>
                    <div className="flex flex-col items-center px-4">
                      <img src={item.image} className="w-[290px] " />
                      <h1>{item.title}</h1>
                      <p>{item.price}</p>
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShopPurse1;

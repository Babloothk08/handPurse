import React from 'react';

function Hero() {
  return (
    <div className="relative w-full bg-white pt-24">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between max-w-[1200px] mx-auto px-4 py-10 gap-10">
        
        {/* Text Content */}
        <div className="flex flex-col gap-6 w-full md:w-1/2">
          <h1 className="text-lg text-gray-600">New Selected</h1>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-semibold leading-tight">
            Best Handbag World
          </h2>
          <p className="text-base text-gray-700 max-w-xl">
            Buy latest handbags, ladies handbags, designer handbags, leather handbags, trendy handbags, fashion handbags at great prices online in India. Cash on delivery.
          </p>
          <div>
            <button className="mt-4 px-6 py-3 bg-amber-950 text-white rounded-md hover:bg-amber-800 transition duration-300">
              Shop Now
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2 h-[300px] md:h-[500px] lg:h-[600px]">
          <div
            className="w-full h-full bg-cover bg-center rounded-full md:rounded-[50px]"
            style={{
              backgroundImage:
                "url('https://media.istockphoto.com/id/618976674/photo/fashion-woman-shopping.jpg?s=612x612&w=0&k=20&c=twPlCtJ05j_SsUXjW_ZK3l9UnuC-GbunecDdC03QScQ=')",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default Hero;

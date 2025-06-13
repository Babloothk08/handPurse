import React from 'react';

function Fashion() {
  return (
    <div className="relative w-full h-full">
      {/* Hero Section with Background */}
      <div
        className="h-screen w-full bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center text-white text-center px-4"
        style={{
          backgroundImage:
            "url('https://hips.hearstapps.com/hmg-prod/images/banner-1-6835c52f68f54.png?crop=0.330xw:0.660xh;0.337xw,0.0160xh&resize=360:*')",
        }}
      >
        <h1 className="font-semibold text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-4">
          New Arrival
        </h1>
        <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6">
          FASHION
        </h2>
        <button className="px-6 py-3 bg-black text-white border-2 border-white hover:bg-white hover:text-black transition duration-300 text-sm sm:text-base">
          Click Here
        </button>
      </div>
    </div>
  );
}

export default Fashion;

import React from 'react';

function Bag1() {
  <script>
    AOS.init();
  </script>
  return (
    <div className="relative w-full py-10"data-aos="fade-up">
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 px-4 max-w-[1200px] mx-auto">
        {/* Card 1 */}
        <div className="flex flex-col md:flex-row bg-[#fce4d1] rounded-xl overflow-hidden w-full max-w-md" data-aos="fade-up">
          {/* Text Content */}
          <div className="p-6 flex flex-col justify-center gap-2 text-center md:text-left">
            <h2 className="text-lg font-semibold text-orange-600">SALE UP TO 40%</h2>
            <h1 className="text-4xl font-sans">Luxury</h1>
            <h1 className="text-4xl font-sans">HandBag</h1>
            <p className="pt-4 underline font-mono cursor-pointer hover:text-orange-500">Shop Now</p>
          </div>
          {/* Image */}
          <div className="flex justify-center items-center p-4" data-aos="fade-up">
            <img
              src="https://wp.dreamitsolution.net/totes/wp-content/uploads/2024/12/handbag1.png"
              alt="Handbag"
              className="h-40 w-auto object-contain"
            />
          </div>
        </div>

        {/* Card 2 (Same as above) */}
        <div className="flex flex-col md:flex-row bg-[#fce4d1] rounded-xl overflow-hidden w-full max-w-md">
          {/* Text Content */}
          <div className="p-6 flex flex-col justify-center gap-2 text-center md:text-left">
            <h2 className="text-lg font-semibold text-orange-600">SALE UP TO 40%</h2>
            <h1 className="text-4xl font-sans">Luxury</h1>
            <h1 className="text-4xl font-sans">HandBag</h1>
            <p className="pt-4 underline font-mono cursor-pointer hover:text-orange-500">Shop Now</p>
          </div>
          {/* Image */}
          <div className="flex justify-center items-center p-4">
            <img
              src="https://wp.dreamitsolution.net/totes/wp-content/uploads/2024/12/handbag1.png"
              alt="Handbag"
              className="h-40 w-auto object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bag1;

import React from 'react';

function Brandbags1() {
  // Optional: You can map products instead of hardcoding
  const products = [
    {
      title: 'Buckle Handbag',
      price: '22.00$',
      image:
        'https://media.istockphoto.com/id/654113018/photo/orange-handbag-on-emerald-green-background.jpg?s=612x612&w=0&k=20&c=RVpc7QXNgBIm_gYjYc53XdtHM07F8WEXIKxmjVNPDL4=',
    },
    {
      title: 'Diane Handbag',
      price: '49.00$',
      image:
        'https://t3.ftcdn.net/jpg/08/60/85/30/360_F_860853099_feiJPkIHfUaaMbZUHBSerr0wnwcFZBcp.jpg',
    },
    {
      title: 'Diyana Handbag',
      price: '2.00$',
      image:
        'https://media.istockphoto.com/id/654113018/photo/orange-handbag-on-emerald-green-background.jpg?s=612x612&w=0&k=20&c=RVpc7QXNgBIm_gYjYc53XdtHM07F8WEXIKxmjVNPDL4=',
    },
    {
      title: 'Flap Over',
      price: '49.00$',
      image:
        'https://t3.ftcdn.net/jpg/08/39/70/68/360_F_839706855_bkEqXgFv0UUOvR5R8mp9Isx4AMTEfriw.jpg',
    },
  ];

  return (
    <div  className="relative w-full py-16 bg-white" >
      <div className="max-w-[1300px] mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-white p-4 shadow-md rounded-lg hover:shadow-xl transition"
          >
            <img
              src={item.image}
              alt={item.title}
              className="h-[250px] w-full object-contain rounded-md mb-4"
            />
            <h1 className="text-xl font-semibold text-gray-800">{item.title}</h1>
            <p className="text-gray-600">{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Brandbags1;

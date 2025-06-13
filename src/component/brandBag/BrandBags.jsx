import React from 'react';

function BrandBags() {
  // Reusable product data (optional for clarity, could be mapped)
  const products = [
    {
      img: 'https://media.istockphoto.com/id/1061199048/vector/stylish-womens-beige-handbag.jpg?s=612x612&w=0&k=20&c=ikrH5_Gz5x1j8Vf2wEUj4SXbsjxH9OVAqgmpKiGX7TY=',
    },
    {
      img: 'https://media.istockphoto.com/id/1365118618/photo/blue-fashion-purse-handbag-on-white-background-isolated.jpg?s=612x612&w=0&k=20&c=VNszfC0cxenqZGhjlr3gqqvzHWREuhdY_H3CKF1B38g=',
    },
    {
      img: 'https://cdn-images.farfetch-contents.com/15/76/83/45/15768345_28790830_600.jpg',
    },
    {
      img: 'https://assets.ajio.com/medias/sys_master/root/20231107/hoXZ/654a5da5ddf779151975eac4/-473Wx593H-410407304-100-MODEL.jpg',
    },
    {
      img: 'https://png.pngtree.com/png-clipart/20250127/original/pngtree-designer-women-purses-and-luxury-handbag-collection-png-image_20059295.png',
    },
    {
      img: 'https://png.pngtree.com/png-vector/20241230/ourmid/pngtree-trendy-women-s-handbags-and-purses-for-every-occasion-png-image_14975126.png',
    },
    {
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9KIRorgf2j-YL7AZA-yZP_oxn1_z8OZVEZO4hlI9tggpnEFsy2j2gmh61TJMxl_D9Xnw&usqp=CAU',
    },
    {
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRVyiiHQDdPDNw4heBV_utfnnjneGGdfnrszIlNcz8fFr3jXSj12zFRAyIRnfzsj2QBt4&usqp=CAU',
    },
  ];

  return (
    <div className="w-full py-16 bg-white">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-semibold underline">Top Brand Bags</h1>
      </div>

      <div className="max-w-[1300px] mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <div key={index} className="flex flex-col items-center bg-white p-4 shadow-md rounded-lg hover:shadow-xl transition">
            <img
              src={product.img}
              alt="Handbag"
              className="h-[250px] w-full object-contain mb-4 rounded-md"
            />
            <h2 className="text-xl font-semibold text-gray-800">Janica Handbag</h2>
            <p className="text-gray-600">$49.00</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BrandBags;

import React from 'react';
import Heading from '../Shared/Heading';
import Img1 from '../../assets/product/p-1.jpg';
import Img2 from '../../assets/product/p-2.jpg';
import Img3 from '../../assets/product/p-3.jpg';
import Img4 from '../../assets/product/p-4.jpg';
import Img5 from '../../assets/product/p-5.jpg';
import Img6 from '../../assets/product/p-9.jpg';
import Img7 from '../../assets/product/p-7.jpg';
import ProductCard from '../Products/ProductCard';

const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: 'Boat Headphone',
    price: '199',
  },
  {
    id: 2,
    img: Img2,
    title: 'Smart Watches',
    price: '249',
  },
  {
    id: 3,
    img: Img3,
    title: 'Phone Headphones',
    price: '129',
  },
  {
    id: 4,
    img: Img4,
    title: 'Air Pods',
    price: '149',
  },
];

const ProductData2 = [
  {
    id: 5,
    img: Img5,
    title: 'Smart Headphones',
    price: '199',
  },
  {
    id: 6,
    img: Img6,
    title: 'Home Theater Headphones',
    price: '249',
  },
  {
    id: 7,
    img: Img7,
    title: 'Headphones For Work',
    price: '199',
  },
];

const Products = () => {
  return (
    <div className="container mx-auto p-4">
      {/* Header Section */}
      <Heading title="Our Products" subtitle="Explore Our Products" />

      {/* Body Section */}
      <ProductCard data={ProductsData} />
      <ProductCard data={ProductData2} />
    </div>
  );
};

export default Products;

import React from 'react'

export default function ProductCard({product: {id, image, title, category, price},
}) {
  return <li className='rounded-lg shadow-md overflow-hidden cursor-pointer'>
    <img className='w-full' src={image} alt={title} />
    <div className='mt-2 px-2 text-lg flex justify-between items-center'>
        <h3>{title}</h3>
        <p>{`₩${price}`}</p>
    </div>
    <p>{category}</p>
  </li>;
}

import React from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { useAuthContext } from '../context/AuthContext'
import { getCart } from '../api/firebase'
import { useQuery } from '@tanstack/react-query';
import CartItem from '../components/CartItem';
import PriceCard from '../components/PriceCard';

export default function MyCart() {
  const {uid} = useAuthContext();
  const {isLoading, data: products} = useQuery(['carts'], () => getCart(uid));
  
  if(isLoading) return <p>Loading...</p>

  const hasProducts = products && products.length > 0;
  const totalPrice = products && products.reduce((prev, current) => prev + parseInt(current.price) * current.quantity, 0);

  return <section>
    <p>내 장바구니</p>
    {!hasProducts && <p> 장바구니에 상품이 없습니다. 열심히 쇼핑해 주세요!</p>}
    {hasProducts && <>
      <ul>
        {products && products.map((product) => (<CartItem key={product.id} product={product} uid={uid} /> ))}
      </ul>
      <div>
        <PriceCard text="상품 총액" price={totalPrice} />
      </div>
    </>}
  </section>
}


import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { useAuthContext } from '../context/AuthContext'
import { getCart } from '../api/firebase'

export default function CartStatus() {
    const {uid} = useAuthContext();
    const {data: products} = useQuery(['carts'], getCart);
  return (
    <div>
        <AiOutlineShoppingCart />
        {products && <p>{products.length}</p>}
    </div>
  )
}

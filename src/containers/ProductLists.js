import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setProducts } from '../redux/actions/productActions';
import ProductComponent from './ProductComponent'

export default function ProductLists() {

    const dispatch = useDispatch();

    const fetchProducts = async () =>{
        const response = await axios.get("https://fakestoreapi.com/products")
        .catch((err) =>{
            console.log("Err:", err);
        });

        dispatch(setProducts(response));
    }

useEffect(() =>{
    fetchProducts();
})
  return (
    <div className='ui grid container'>
        <ProductComponent/>
    </div>
  )
}

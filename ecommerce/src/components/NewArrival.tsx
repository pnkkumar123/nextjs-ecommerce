"use client"
import React from 'react'
import Container from './Container'
import {ProductProps} from '../../type'
import Slider from 'react-slick'
import Product from './Product'

interface Props {
    products : ProductProps[];
}

const NewArrival = ({products}:Props) => {
  return (
    <Container>
        <div>
         <Slider/>
         {products?.map((item: ProductProps)=>(
            <Product/>
         ))}
        </div>
    </Container>
  )
}

export default NewArrival
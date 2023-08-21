"use client"
import { createContext, useState } from "react"

const ProductCardContext = createContext(null);

type ProductCardProps = {
    key?: number,
    productName: string,
    productImage?: string,
    productPrice: number,   
    productCurrency: string, 
    productRating?: number,
    productLiked?: boolean,
}

export default function ProductCard({
    key, productName, productImage, productPrice, productCurrency, productRating, productLiked
}: ProductCardProps){
    
    return(
    <div className='rounded border-2 border-gray-100'>
        <div>{productName}</div>   
        <div>{`${productPrice} ${productCurrency}`}</div>   
        <div>{productRating}</div>
        <div>{productLiked}</div>
    </div>
    )
}
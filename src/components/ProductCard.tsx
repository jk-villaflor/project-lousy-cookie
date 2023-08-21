"use client"
import Link from "next/link";
import { createContext, useState } from "react"

const ProductCardContext = createContext(null);

type ProductCardProps = {
    key: number,
    productID: number,
    productName: string,
    productImage?: string,
    productPrice: number,   
    productCurrency: string, 
    productRating?: number,
    productLiked?: boolean,
}

export default function ProductCard({
    key, productID, productName, productImage, productPrice, productCurrency, productRating, productLiked
}: ProductCardProps){
    
    return(
    <Link href={`/${productID}`}>
        <div className='rounded border-2 border-gray-100'>
            <div className="font-semibold text-md">{productName}</div>   
            <div>{`${productPrice} ${productCurrency}`}</div>   
            <div>{productRating}</div>
            <div>{productLiked}</div>
        </div>
    </Link>
    )
}
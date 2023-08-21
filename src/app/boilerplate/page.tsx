"use client"

// import { useContext } from 'react'
import ProductCard from '@/components/ProductCard'
import { ReactNode } from 'react';

export default function Boilerplate(){    
    
    const products =[
        {   id: 1,
            name: 'Product1',
            price: 120.00,
            currencyCode: 'USD',
            image: '',
            ratings: 5,
            liked: true,
        },{   id: 2,
            name: 'Product2',
            price: 202.22,
            currencyCode: 'CAD',
            image: '',
            ratings: 5,
            liked: true,
        },
        {   id: 3,
            name: 'Product3',
            price: 3033.00,
            currencyCode: 'PHP',
            image: '',
            ratings: 5,
            liked: true,
        },
    ];


          
    
    return(
        <div className="grid sm:grid-cols-2 lg:grid-cols-6 gap-4">
            {
                products.map((item)=>(
                    <ProductCard key={item.id} 
                    productName={item.name}
                    productPrice={item.price}
                    productCurrency={item.currencyCode}
                    productRating={item.ratings}
                    productLiked={item.liked}                
                    />
                ))
            }
        </div>
    )
}
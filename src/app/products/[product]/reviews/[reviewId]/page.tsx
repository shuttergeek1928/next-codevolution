'use client'
import React from 'react'

function getRandomInt(count : number){
  return Math.floor(Math.random() * count);
}

export default function ReviewDetail({params} : {params : {product : string; reviewId: string;}}){
  const random = getRandomInt(2);
  if(random === 1){
    throw new Error("Error loading reviews");
  }
  return (
    <div>
        <h3>Review {params.reviewId} of product {params.product}</h3>
    </div>
  )
}

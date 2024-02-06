import Link from 'next/link'
import React from 'react'

export default function Products({params} : {params : {product : string}}) {
  return (
    <div>
        <h3>Products: {params.product}</h3>
        <ol>
        <li>
            <Link href={`/products/${params.product}/reviews/1`}>Review 1</Link>
        </li>
        <li>
            <Link href={`/products/${params.product}/reviews/2`}>Review 2</Link>
        </li>
        <li>
            <Link href={`/products/${params.product}/reviews/3`}>Review 3</Link>
        </li>
      </ol>
      
    </div>
  )
}

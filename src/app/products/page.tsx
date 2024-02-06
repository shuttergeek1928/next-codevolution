import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <div>
      <h1>Products Page</h1>
      <ol>
        <li>
            <Link href="/products/1">Product 1</Link>
        </li>
        <li>
            <Link href="/products/2">Product 2</Link>
        </li>
        <li>
            <Link href="/products/3">Product 3</Link>
        </li>
      </ol>
    </div>
  );
}

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>Welcome to the home page...</h1>
      <Link href="/products">Go to products</Link>
      <br></br>
      <Link href="/docs/">Go to Docs</Link>
    </>
  );
}

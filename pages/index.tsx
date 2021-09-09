import classNames from "classnames";
import Head from "next/head";
import Image from "next/image";
import Product from "../components/product";
import { useEffect, useState } from "react";
import { IProduct } from "../models/product";

export default function Home() {
  const [products, setProducts] = useState<IProduct[]>([]);
  
  useEffect(() => {
    const fetchProducts = async () => {
      const res = await (await fetch(`api/products`)).json();
      setProducts(res);
    };
    fetchProducts();
  }, []);

  return (
    
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-gray-200 via-gray-300 to-gray-500">
      
      <main className="py-5 flex flex-col flex-1 justify-center items-center">
        <h1 className="m-10 leading-snug text-8xl text-center font-sans">
          Enjoy our range of products!
        </h1>

        <div className="mt-10 flex flex-wrap flex-col sm:flex-row w-full justify-center items-center">
        {products.map((p) => (
          <Product key={p.id} {...p} />
        ))}
        </div>
      </main>   
    </div>
  );
}
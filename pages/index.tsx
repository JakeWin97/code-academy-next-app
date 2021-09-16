import Product from "../components/product";
import { SetStateAction, useEffect, useState } from "react";
import { IProduct } from "../models/product";
import Pagination from "../components/pagination";


export default function Home() {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(50); // Limit to 10 products per page.
  
  useEffect(() => {
    const fetchProducts = async () => {
      const res = await (await fetch(`api/products`)).json();
      setProducts(res);
    };
    fetchProducts();
  }, []);

  const indexLastProduct = currentPage * productsPerPage;
  const indexFirstProduct = indexLastProduct - productsPerPage;
  const currentProduct = products.slice(indexFirstProduct, indexLastProduct);

  return (
    
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-gray-200 via-gray-300 to-gray-500">
      
      <main className="py-5 flex flex-col flex-1 justify-center items-center">
        <h1 className="m-10 leading-snug text-8xl text-center font-sans">
          Enjoy our range of products!
        </h1>

        <div className="mt-10 flex flex-wrap flex-col sm:flex-row w-full justify-center items-center">
        {currentProduct.map((p) => (  // Map the current slice
          <Product key={p.product_id} {...p} />
        ))}
        
        </div>
        <Pagination productsPerPage={productsPerPage} totalProducts={products.length}/>
      </main>   
    </div>
  );
}
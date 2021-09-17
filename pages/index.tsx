import Product from "../components/product";
import { SetStateAction, useEffect, useState } from "react";
import { IProduct } from "../models/product";
import Pagination from "../components/pagination";


export default function Home() {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(12); // Limit to 12 products per page.
  
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

  const pageNums = [];

  for(let i = 1; i <= Math.ceil(products.length/ productsPerPage); i++) {
        pageNums.push(i) // Ensure the number of page numbers are correct based on the slicing.
  }

  function setPage(pageNumber: number) {
      setCurrentPage(pageNumber);
  }

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

        <nav className="mt-8 mb-8 inline">
            <ul className="pagination inline pt-8">
                {pageNums.map(num => (
                    <li key={num} className="page-num inline pr-5 pl-5 pt-4 pb-4 bg-white border" onClick={() => setPage(num)}>
                        <a className="page-link border-black">{num}</a>
                    </li>
                ))}
            </ul>
        </nav>

        {/* <Pagination productsPerPage={productsPerPage} totalProducts={products.length}/> */}
      </main>   
    </div>
  );
}
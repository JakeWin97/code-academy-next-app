import Product from "../components/product";
import { SetStateAction, useEffect, useState } from "react";
import { IProduct } from "../models/product";
import Pagination from "../components/pagination";
import PageTitle from "../components/page_title";


export default function Home() {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setPerPage] = useState(12); // Default value

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

  const paginate = (pageNumber: SetStateAction<number>) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'auto' }); // jump to top no scroll animation
  }

  async function sortProducts(method: string) {
    const res = await (await fetch(`api/products/${method}`)).json();
    setProducts(res);
  }

  return (

    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-gray-200 via-gray-300 to-gray-500">
      <PageTitle pageName="Shop Now" message="Enjoy our range of products"></PageTitle>
      <main className="py-5 flex flex-col flex-1 justify-center items-center">
        <div className="w-full items-center justify-center flex">
          <nav>
            <ul className="flex">
              <li>
                <label className="mr-1 font-sans">Sort by: </label>
                <select onChange={e => sortProducts(e.target.value)} className="font-sans mr-8">
                  <option value="">Default</option>
                  <option value="sort_asc">Price Ascending</option>
                  <option value="sort_desc">Price Descending</option>
                </select>
              </li>
              <li>
                <label className="mr-1 font-sans">Products per page: </label>
                <select onChange={e => setPerPage(Number(e.target.value))} className="font-sans">
                  <option value="12">12</option>
                  <option value="24">24</option>
                  <option value="36">36</option>
                  <option value="48">48</option>
                  <option value="60">60</option>
                </select>
              </li>
            </ul>
          </nav>
        </div>

        <div className="mt-10 flex flex-wrap flex-col sm:flex-row w-full justify-center items-center">
          {currentProduct.map((p) => (  // Map the current slice
            <Product key={p.product_id} {...p} />
          ))}
        </div>

        <Pagination productsPerPage={productsPerPage} totalProducts={products.length} paginate={paginate} />
      </main>
    </div>
  );
}
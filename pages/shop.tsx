import Product from "../components/product";
import { SetStateAction, useEffect, useState } from "react";
import { IProduct } from "../models/product";
import Pagination from "../components/pagination";
import PageTitle from "../components/page_title";
import BasketItem from "../components/basket_item";

function intToFloat(num: number, decPlaces: number) { return num.toFixed(decPlaces); } // Add trailing 0s.

export default function Shop() {
  var [products, setProducts] = useState<IProduct[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setPerPage] = useState(12); // Default value
  const [category, setCategory] = useState(0);
  const [basket, setBasket] = useState<IProduct[]>([]);
  var [basketValue, setValue] = useState(0);

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

  const setbasket = (item: IProduct) => {
    setBasket([...basket, item]);
    setValue(basketValue += item.selling_price)
  }

  async function sortProducts(order: string, category: string) {
    const res = await (await fetch(`api/products/category/${category}`)).json();
    if (order == "ASC") {
      res.sort((a: { selling_price: number; }, b: { selling_price: number; }) => a.selling_price - b.selling_price);
    }

    else if (order == "DESC") {
      res.sort((a: { selling_price: number; }, b: { selling_price: number; }) => b.selling_price - a.selling_price);
    }

    setProducts(res)
  }

  async function getCategory(catNum: number) {
    var dropdown = (document.getElementById('sortby')) as HTMLSelectElement;
    dropdown.selectedIndex = 0;

    if (catNum == 0) {
      const res = await (await fetch(`api/products`)).json();
      setProducts(res);
      setCategory(catNum);
    }
    else {
      const res = await (await fetch(`api/products/category/${catNum}`)).json();
      setProducts(res);
      setCategory(catNum)
    }
  }

  return (

    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-gray-200 via-gray-300 to-gray-500">
      <div id="basket_wrapper" className="mt-8 bg-gray-200 hidden">
        <div className="w-96 text-center bg-blue-500 p-3 rounded-3xl border-2 border-white">
          <h1 className="text-2xl text-white mb-2 font-bold">Basket</h1>
          {basket.map((p) => (
            <BasketItem item={p} />
          ))}
          <h1 className="mt-2 text-2xl text-white font-bold">Total value: £{intToFloat(basketValue, 2)} </h1>

        </div>

      </div>

      <PageTitle pageName="Shop Now" message="Enjoy our range of products"></PageTitle>
      <main className="py-5 flex flex-col flex-1 justify-center items-center">
        <div className="w-full items-center justify-center flex">
          <nav className="bg-green-400 pt-3 pb-3 pl-6 pr-6 rounded-2xl">
            <ul className="flex">
              <li>
                <label className="mr-1 font-sans font-medium">Category: </label>
                <select id="cat" onChange={e => getCategory(Number(e.target.value))} className="font-sans mr-8 rounded-2xl bg-gray-200">
                  <option value="0">Show All</option>
                  <option value="1">Fruit and Veg</option>
                  <option value="2">Dairy</option>
                  <option value="3">Meat and Poultry</option>
                  <option value="4">Breakfast</option>
                  <option value="5">Bathroom</option>
                  <option value="6">Frozen</option>
                </select>
              </li>
              <li>
                <label className="mr-1 font-sans font-medium">Sort by: </label>
                <select id="sortby" onChange={e => sortProducts(e.target.value, category.toString())} className="font-sans mr-8 rounded-2xl bg-gray-200">
                  <option value="">Default</option>
                  <option value="ASC">Price Ascending</option>
                  <option value="DESC">Price Descending</option>
                </select>
              </li>
              <li>
                <label className="mr-1 font-sans font-medium">Products per page: </label>
                <select onChange={e => setPerPage(Number(e.target.value))} className="font-sans rounded-2xl bg-gray-200">
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
            <Product key={p.product_id}{...p} product_id={p.product_id} product_name={p.product_name} selling_price={p.selling_price} category={p.category} img={p.img} setbasket={setbasket} />
          ))}
        </div>

        <Pagination productsPerPage={productsPerPage} totalProducts={products.length} paginate={paginate} />
      </main>
    </div>
  );
}
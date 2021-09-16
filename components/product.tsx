import classNames from "classnames";
import { IProduct } from "../models/product";
import Link from "next/link";

const Product:React.FC <IProduct> = ({ product_id, product_name, selling_price, category }) => {
  function intToFloat(num: number, decPlaces:number) { return num.toFixed(decPlaces); } // Add trailing 0s.
	return (
        <Link href={`/${product_id}`}>
		<a className="z-0 m-3 w-96 text-left no-underline border border-solid border-gray-200 rounded-lg hover:opacity-70 transform transition duration-700 ease-in-out hover:-translate-y-2 hover:shadow-md focus:shadow-md focus:outline-none">
            <div
              id="image"
              className={classNames(
                `h-64 rounded-t-lg flex items-center justify-center`,
                {
                  "bg-blue-100": category === 0,
                  "bg-pink-100": category === 1,
                  "bg-purple-100": category === 2,
                  "bg-green-100": category === 3,
                }
              )}
            >
              <span className="material-icons text-6xl text-white">image</span>
            </div>
            <div className="p-5 bg-white font-sans">
              <h2 className="m0 mb-0 text-3xl font-medium">{product_name}</h2>
              <p className="m-0 mb-4 text-medium">Category: {category}</p>     
              <p className="m-0 text-3xl text-green-600 font-medium text-right">£{intToFloat(selling_price, 2)}</p>
               
            </div>
          </a>
    </Link>
	);
};

export default Product;
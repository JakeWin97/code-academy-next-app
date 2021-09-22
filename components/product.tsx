import classNames from "classnames";
import { IProduct } from "../models/product";
import Link from "next/link";
import Image from "next/image";

const Product:React.FC <IProduct> = ({ product_id, product_name, selling_price, category, img, setbasket }) => {
  function intToFloat(num: number, decPlaces:number) { return num.toFixed(decPlaces); } // Add trailing 0s.
	return (
        // <Link href={`/${product_id}`}>
		<a className="z-0 m-3 w-96 text-left no-underline border border-solid border-gray-200 rounded-lg hover:opacity-70 transform transition duration-700 ease-in-out hover:-translate-y-2 hover:shadow-md focus:shadow-md focus:outline-none">
            <div
              id="image"
              className="h-62 rounded-t-lg flex items-center justify-center">
              <Image src={img} alt={product_name} width="960" height="540"/>
            </div>  
            <div className="p-5 bg-white font-sans">
              <h2 className="m0 mb-0 text-3xl font-medium">{product_name}</h2>
              <p className="m-0 mb-4 text-medium">Category: {category}</p>     
              <p className="m-0 text-3xl text-green-600 font-medium text-right">£{intToFloat(selling_price, 2)}</p>
              <button onClick={() => setbasket({product_id, product_name, selling_price, category, img, setbasket})} className="bg-blue-500">Test</button>
            </div>
          </a>
    // </Link>
	);
};

export default Product;
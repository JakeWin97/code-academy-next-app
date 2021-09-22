import classNames from "classnames";
import { IProduct } from "../models/product";
import Link from "next/link";
import Image from "next/image";

const Product: React.FC<IProduct> = ({ product_id, product_name, selling_price, category, img, setbasket }) => {
  function intToFloat(num: number, decPlaces: number) { return num.toFixed(decPlaces); } // Add trailing 0s.
  return (

    <div className="z-0 m-3 w-96 text-left no-underline border border-solid border-gray-200 rounded-lg ease-in-out hover:shadow-md focus:shadow-md focus:outline-none">
      <Link href={`/${product_id}`}>
        <div
          id="image"
          className="h-62 rounded-t-lg flex items-center justify-center cursor-pointer hover:opacity-70">
          <Image src={img} alt={product_name} width="960" height="540" />
        </div>
      </Link>
      <div className="p-5 bg-white font-sans">
        <h2 className="m0 mb-0 text-3xl font-medium mb-2">{product_name}</h2>
        <p className="text-3xl text-green-600 font-medium">£{intToFloat(selling_price, 2)}</p>
        <p className="text-right">
          <button onClick={() => setbasket({ product_id, product_name, selling_price, category, img, setbasket })}
            className="w-24 font-semibold text-l bg-blue-500 p-2 text-white rounded-xl hover:bg-green-400 hover:text-black">Add</button></p>
      </div>
    </div>
  );
};

export default Product;
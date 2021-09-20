import { IProduct } from "../models/product";
import Link from "next/link";
import Image from "next/image";

const ProdDetail: React.FC<IProduct> = ({ product_id, product_name, selling_price, category, img }) => {
    function intToFloat(num: number, decPlaces: number) { return num.toFixed(decPlaces); } // Add trailing 0s.
    return (
        <div className="items-center flex justify-center mt-14">
            <div className="bg-blue-500 p-24 flex rounded-3xl shadow-2xl">
                <div className="mr-28">
                    <Image src={img} alt={product_name} width="426" height="214" />
                </div>
                <div className="justify-center items-center text-center mt-2">
                    <h1 className="text-6xl font-semibold mb-3">{product_name}</h1>
                    <h1 className="text-4xl font-semibold mb-6">£{intToFloat(selling_price, 2)}</h1>
                    <button className="text-xl rounded-3xl bg-green-400 p-3 font-semibold shadow-2xl hover:bg-black hover:text-white">Add to basket</button>

                </div>
            </div>
        </div>
    );
};

export default ProdDetail;
import { useRouter } from "next/dist/client/router";
import React, { useEffect, useState } from "react";
import ProdDetail from "../components/prod_detail";
import { IProduct } from "../models/product";
import Link from "next/link";

export default function ProductDetail() {
  const router = useRouter();
  const { id } = router.query;

  const [product, setProduct] = useState<IProduct[] | undefined>();

  useEffect(() => {
    const fetchProduct = async () => {
      const res = await (await fetch(`api/products/${id}`)).json();
      setProduct(res);
    };
    fetchProduct();
  }, []);

  if (product == undefined || product == null) {
    return (
      <main className="px-10 py-6 flex flex-col flex-1 bg-gradient-to-b from-gray-200 via-gray-300 to-gray-500">
        <h1>This product could not be found</h1>
      </main>
    );
  }
  else {
    return (

      <main className="px-10 py-6 flex flex-col flex-1 bg-gradient-to-b from-gray-200 via-gray-300 to-gray-500">
        <Link href="/shop"><button className="text-xl rounded-3xl bg-green-400 p-3 font-semibold w-36 shadow-2xl hover:bg-black hover:text-white">Back</button></Link>
        {product.map((p) => (
          <ProdDetail key={p.product_id} {...p} />
        ))}
      </main>
    );
  }

}
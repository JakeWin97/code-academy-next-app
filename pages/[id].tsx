import { useRouter } from "next/dist/client/router";
import { useEffect, useState } from "react";
import Product from "../components/product";
import { IProduct } from "../models/product";

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

  if (product == undefined  || product == null) {
    return (
      <main className="px-10 py-6 flex flex-col flex-1 bg-gradient-to-b from-gray-200 via-gray-300 to-gray-500">
        <h1>This product could not be found</h1>
      </main>
    );
  }
  else 
  {
    return (
      <main className="px-10 py-6 flex flex-col flex-1 bg-gradient-to-b from-gray-200 via-gray-300 to-gray-500">
        {product.map((p) => (  
          <Product key={p.product_id} {...p} />
        ))}
      </main>
    );
  }
  
}
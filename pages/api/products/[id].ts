import { NextApiRequest, NextApiResponse } from "next";
import { useRouter } from "next/dist/client/router";
import { products } from ".";
import { IProduct } from "../../../models/product";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<IProduct>
) {
  const {id} = req.query
  res.status(200).json(products[Number(id)-1]);
}





import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import { getDB } from "../../../../db/init-db";
import { IProduct } from "../../../../models/product";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<IProduct[]>
) {
  const { category } = req.query;
  const { db } = getDB();
  
  if (category == "0") {
    const product = await db.query(`SELECT * FROM CodeAcademy.product`);
    res.status(200).json(product);
  }
  else {
    const product = await db.query(`SELECT * FROM CodeAcademy.product WHERE category=${category}`);
    res.status(200).json(product);
  }
  
  
}
import type { NextApiRequest, NextApiResponse } from "next";
import { IProduct } from "../../../models/product";
import { getDB } from "../../../db/init-db";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<IProduct[]>
) {
  const { db } = getDB();
  const products = await db.query('SELECT * FROM CodeAcademy.product ORDER BY selling_price ASC;');
  res.status(200).json(products);
}
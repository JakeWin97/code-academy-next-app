import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import { getDB } from "../../../db/init-db";
import { IProduct } from "../../../models/product";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<IProduct[]>
) {
  const { id } = req.query;
  const { db } = getDB();
  const product = await db.query(`SELECT * FROM CodeAcademy.product WHERE product_id=${id};`);
  res.status(200).json(product);
}

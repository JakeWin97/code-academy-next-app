import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import { products } from ".";

const product: NextApiHandler = (req, res) => {
  const { id } = req.query;
  res.status(200).json(products[Number(id)-1]);
}

export default product;

"use server";

import { collection, dbConnect } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";

export const getProducts = async () => {
  const products = await dbConnect(collection.Products).find().toArray();

  return products.map((product) => ({
    ...product,
    _id: product._id.toString(), // ⭐ IMPORTANT
  }));
};

export const getSingleProduct = async (id) => {
  if (!id || id.length !== 24) return null;

  const query = { _id: new ObjectId(id) };
  const product = await dbConnect(collection.Products).findOne(query);

  if (!product) return null;

  return {
    ...product,
    _id: product._id.toString(),
  };
};

// Add new product
export const addProduct = async (productData) => {
  const result = await dbConnect(collection.Products).insertOne({
    ...productData,
    createdAt: new Date(),
  });

  return {
    message: "Product added successfully ✅",
    id: result.insertedId.toString(),
  };
};

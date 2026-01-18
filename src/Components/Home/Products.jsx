import React from "react";
import ProductCard from "../Cards/ProducCard";
import { getProducts } from "@/app/actions/server/products";

const Products = async () => {
  const products = await getProducts();
  return (
    <div>
      <h2 className="text-4xl font-bold text-center mb-6">
        Our <span className="text-blue-500">Products</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5 px-10 mx-auto">
        {products.slice(0, 8).map((product) => (
          <ProductCard key={product._id} product={product}></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default Products;

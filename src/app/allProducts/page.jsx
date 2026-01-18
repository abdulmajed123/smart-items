import React from "react";
import { getProducts } from "../actions/server/products";
import ProductCard from "@/Components/Cards/ProducCard";

const AllProducts = async () => {
  const products = await getProducts();
  return (
    <div className="py-5 mt-10">
      {" "}
      <h2 className="text-4xl font-bold text-center mb-6">
        All <span className="text-primary">Products</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5 px-10 mx-auto">
        {products.map((product) => (
          <ProductCard key={product._id} product={product}></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default AllProducts;

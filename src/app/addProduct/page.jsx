"use client";
import { useState } from "react";
import { addProduct } from "@/app/actions/server/products";

export default function AddProduct() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const form = e.target;
    const product = {
      name: form.name.value,
      description: form.description.value,
      price: Number(form.price.value),
      category: form.category.value,
      stock: Number(form.stock.value),
      rating: Number(form.rating.value),
      isFeatured: form.isFeatured.checked,
      image: form.image.value,
    };

    try {
      const res = await addProduct(product);
      alert(res.message);
      form.reset();
    } catch (err) {
      console.error(err);
      alert("Failed to add product ❌");
    }

    setLoading(false);
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-8 mb-5">
      <h1 className="text-3xl font-bold mb-6 text-center">Add New Product</h1>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block font-medium mb-1">
            Product Name <span className="text-red-500">*</span>
          </label>
          <input
            id="name"
            name="name"
            placeholder="Enter product name"
            className="input input-bordered w-full rounded-lg"
            required
          />
        </div>

        {/* Description */}
        <div>
          <label htmlFor="description" className="block font-medium mb-1">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            placeholder="Enter product description"
            className="textarea textarea-bordered w-full rounded-lg"
            rows={3}
          />
        </div>

        {/* Price */}
        <div>
          <label htmlFor="price" className="block font-medium mb-1">
            Price ($) <span className="text-red-500">*</span>
          </label>
          <input
            id="price"
            name="price"
            type="number"
            placeholder="Enter price"
            className="input input-bordered w-full rounded-lg"
            required
          />
        </div>

        {/* Category */}
        <div>
          <label htmlFor="category" className="block font-medium mb-1">
            Category
          </label>
          <input
            id="category"
            name="category"
            placeholder="e.g., Electronics, Books"
            className="input input-bordered w-full rounded-lg"
          />
        </div>

        {/* Stock */}
        <div>
          <label htmlFor="stock" className="block font-medium mb-1">
            Stock
          </label>
          <input
            id="stock"
            name="stock"
            type="number"
            placeholder="Enter stock quantity"
            className="input input-bordered w-full rounded-lg"
          />
        </div>

        {/* Rating */}
        <div>
          <label htmlFor="rating" className="block font-medium mb-1">
            Rating
          </label>
          <input
            id="rating"
            name="rating"
            type="number"
            step="0.1"
            min="0"
            max="5"
            placeholder="Enter rating (0-5)"
            className="input input-bordered w-full rounded-lg"
          />
        </div>

        {/* Image URL */}
        <div>
          <label htmlFor="image" className="block font-medium mb-1">
            Image URL
          </label>
          <input
            id="image"
            name="image"
            placeholder="https://example.com/product.jpg"
            className="input input-bordered w-full rounded-lg"
          />
        </div>

        {/* Featured */}
        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            id="isFeatured"
            name="isFeatured"
            className="checkbox"
          />
          <label htmlFor="isFeatured" className="font-medium">
            Featured Product
          </label>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="btn btn-primary w-full rounded-lg"
          disabled={loading}
        >
          {loading ? "Adding..." : "Add Product"}
        </button>
      </form>
    </div>
  );
}

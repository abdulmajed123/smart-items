"use client";

import {
  FaHeadphonesAlt,
  FaMobileAlt,
  FaSwatchbook,
  FaUsb,
} from "react-icons/fa";

const categories = [
  {
    id: 1,
    name: "Electronics",
    icon: FaMobileAlt,
    description: "Smart phones, gadgets & devices",
  },
  {
    id: 2,
    name: "Accessories",
    icon: FaUsb,
    description: "Useful daily tech accessories",
  },
  {
    id: 3,
    name: "Wearables",
    icon: FaSwatchbook,
    description: "Smart watches & fitness gear",
  },
  {
    id: 4,
    name: "Audio",
    icon: FaHeadphonesAlt,
    description: "Speakers & wireless earbuds",
  },
];

export default function Categories() {
  return (
    <section className="mt-20 bg-base-100">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold">
            Shop by <span className="text-primary">Category</span>
          </h2>
          <p className="text-gray-500 mt-2">Explore smart items by category</p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-10">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <div
                key={category.id}
                className="card bg-base-200 shadow-md hover:shadow-xl transition duration-300 cursor-pointer"
              >
                <div className="card-body items-center text-center">
                  <Icon className="text-4xl text-primary mb-3" />
                  <h3 className="card-title">{category.name}</h3>
                  <p className="text-sm text-gray-500">
                    {category.description}
                  </p>
                  <div className="card-actions mt-4">
                    <button className="btn btn-outline btn-primary btn-sm">
                      View Products
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

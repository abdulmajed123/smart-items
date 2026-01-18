"use client";

import Image from "next/image";
import Link from "next/link";
import { FaStar, FaStarHalfAlt, FaRegStar, FaBoxOpen } from "react-icons/fa";

const ProductCard = ({ product }) => {
  const { _id, name, price, category, stock, rating, image } = product;

  // ⭐ Rating Stars
  const renderStars = () => {
    const stars = [];
    const full = Math.floor(rating || 0);
    const half = rating % 1 >= 0.5;
    const empty = 5 - full - (half ? 1 : 0);

    for (let i = 0; i < full; i++)
      stars.push(<FaStar key={`f${i}`} className="text-yellow-400" />);
    if (half) stars.push(<FaStarHalfAlt key="h" className="text-yellow-400" />);
    for (let i = 0; i < empty; i++)
      stars.push(<FaRegStar key={`e${i}`} className="text-yellow-400" />);

    return stars;
  };

  // ✅ Safe Image Handling
  let imageSrc = "/placeholder.png"; // default fallback

  if (image) {
    try {
      // Check if it's a valid external URL
      const url = new URL(image);
      imageSrc = image; // external URL is valid
    } catch {
      // not a valid URL → assume it's a local image in /public/images/
      imageSrc = `/images/${image}`;
    }
  }

  return (
    <div className="card bg-base-100 shadow-md hover:shadow-2xl transition-all duration-300 rounded-xl overflow-hidden">
      {/* Image */}
      <figure className="relative h-52 w-full">
        <Image
          src={imageSrc}
          alt={name || "Product"}
          fill
          className="object-cover"
          unoptimized // optional: skip next/image optimization for unknown domains
        />

        {/* Category Badge */}
        <span className="absolute top-3 left-3 badge badge-secondary">
          {category || "Uncategorized"}
        </span>

        {/* Stock Badge */}
        <span
          className={`absolute top-3 right-3 badge ${
            stock > 0 ? "badge-success" : "badge-error"
          }`}
        >
          {stock > 0 ? "In Stock" : "Out of Stock"}
        </span>
      </figure>

      {/* Body */}
      <div className="card-body">
        <h2 className="card-title text-lg font-bold line-clamp-1">
          {name || "No Name"}
        </h2>

        {/* Price */}
        <p className="text-xl font-semibold text-primary">${price || 0}</p>

        {/* Rating */}
        <div className="flex items-center gap-1">
          {renderStars()}
          <span className="text-sm text-gray-500 ml-1">({rating || 0})</span>
        </div>

        {/* Stock Info */}
        <div className="flex items-center gap-2 text-sm text-gray-600 mt-1">
          <FaBoxOpen />
          <span>{stock || 0} items available</span>
        </div>

        {/* Action */}
        <div className="card-actions mt-4">
          {_id ? (
            <Link href={`/allProducts/${_id}`} className="w-full">
              <button className="btn btn-primary btn-block rounded-lg">
                View Details
              </button>
            </Link>
          ) : (
            <button className="btn btn-disabled w-full rounded-lg">
              No Details
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

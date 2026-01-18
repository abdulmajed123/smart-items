import { getSingleProduct } from "@/app/actions/server/products";
import Image from "next/image";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const ProductDetailsPage = async ({ params }) => {
  const { id } = await params;

  const product = await getSingleProduct(id);

  if (!product) {
    return (
      <div className="text-center mt-20 text-2xl font-semibold">
        Product Not Found
      </div>
    );
  }

  const { name, description, price, category, stock, rating, image } = product;

  const renderStars = () => {
    const stars = [];
    const full = Math.floor(rating);
    const half = rating % 1 >= 0.5;
    const empty = 5 - full - (half ? 1 : 0);

    for (let i = 0; i < full; i++)
      stars.push(<FaStar key={`f${i}`} className="text-yellow-400" />);
    if (half) stars.push(<FaStarHalfAlt key="h" className="text-yellow-400" />);
    for (let i = 0; i < empty; i++)
      stars.push(<FaRegStar key={`e${i}`} className="text-yellow-400" />);

    return stars;
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-14">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="relative h-[420px] rounded-xl overflow-hidden shadow-lg">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover"
            priority
          />
        </div>

        <div>
          <span className="badge badge-secondary mb-3">{category}</span>
          <h1 className="text-4xl font-bold mb-4">{name}</h1>
          <div className="flex items-center gap-1 mb-4">
            {renderStars()}{" "}
            <span className="ml-2 text-gray-500">({rating})</span>
          </div>
          <p className="text-gray-600 mb-6">{description}</p>
          <p className="text-3xl font-semibold text-primary mb-4">${price}</p>
          <p className="mb-6">
            Stock:{" "}
            <span
              className={`font-semibold ${
                stock > 0 ? "text-green-600" : "text-red-600"
              }`}
            >
              {stock > 0 ? `${stock} available` : "Out of stock"}
            </span>
          </p>
          <button className="btn btn-primary btn-wide">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;

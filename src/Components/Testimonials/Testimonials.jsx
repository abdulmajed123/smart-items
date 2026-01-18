"use client";

import { FaStar } from "react-icons/fa";

const reviews = [
  {
    id: 1,
    name: "Rahim",
    comment: "Amazing products and fast delivery!",
  },
  {
    id: 2,
    name: "Karim",
    comment: "Great quality, totally worth the price.",
  },
  {
    id: 3,
    name: "Ayesha",
    comment: "Very satisfied with Smart Items service.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-14 bg-base-100">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold">
            What Our <span className="text-primary">Customers</span> Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <div key={review.id} className="card bg-base-200 shadow">
              <div className="card-body">
                <div className="flex text-yellow-500 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>
                <p className="text-sm italic">"{review.comment}"</p>
                <h4 className="mt-3 font-semibold">{review.name}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

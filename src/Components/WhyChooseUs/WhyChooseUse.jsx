"use client";

import { FaShippingFast, FaLock, FaStar, FaHeadset } from "react-icons/fa";

const features = [
  {
    id: 1,
    icon: FaStar,
    title: "Premium Quality",
    desc: "We provide only top quality smart products",
  },
  {
    id: 2,
    icon: FaShippingFast,
    title: "Fast Delivery",
    desc: "Quick & reliable delivery across the country",
  },
  {
    id: 3,
    icon: FaLock,
    title: "Secure Payment",
    desc: "100% secure payment system",
  },
  {
    id: 4,
    icon: FaHeadset,
    title: "24/7 Support",
    desc: "Friendly customer support anytime",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-14 bg-base-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold">
            Why Choose <span className="text-primary">Smart Items</span>
          </h2>
          <p className="text-gray-500 mt-2">Smart reasons to shop with us</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-10">
          {features.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="card bg-base-200 text-center shadow"
              >
                <div className="card-body items-center">
                  <Icon className="text-4xl text-primary mb-3" />
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="text-sm text-gray-500">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

"use client";

const deals = [
  { id: 1, name: "Wireless Earbuds", price: 79 },
  { id: 2, name: "Smart Watch", price: 129 },
  { id: 3, name: "Mechanical Keyboard", price: 89 },
];

export default function BestDeals() {
  return (
    <section className="py-8 bg-base-100">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold">
            Best <span className="text-primary">Deals</span>
          </h2>
          <p className="text-gray-500 mt-2">
            Grab the best offers before they’re gone
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {deals.map((deal) => (
            <div key={deal.id} className="card bg-base-200 shadow">
              <div className="card-body text-center">
                <h3 className="font-semibold">{deal.name}</h3>
                <p className="text-xl font-bold text-primary">${deal.price}</p>
                <button className="btn btn-primary btn-sm mt-3">Buy Now</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

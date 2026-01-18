import Link from "next/link";

export default function Banner() {
  return (
    <section className="bg-gradient-to-r from-blue-50 to-indigo-100 py-24">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Badge */}
        <div className="inline-block mb-6">
          <span className="badge badge-primary badge-outline px-4 py-3 text-sm">
            Smart Product Platform
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
          Discover & Manage <span className="text-blue-600">Smart Items</span>
          <br className="hidden md:block" />
          Effortlessly
        </h1>

        {/* Description */}
        <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
          SmartItems is a simple and modern platform to explore, view, and
          manage products with ease. Built using Next.js and Express.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex justify-center gap-4 flex-wrap">
          <Link href="/items" className="btn btn-primary px-8">
            View Items
          </Link>

          <Link href="/login" className="btn btn-outline btn-primary px-8">
            Get Started
          </Link>
        </div>
      </div>
    </section>
  );
}

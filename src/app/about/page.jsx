"use client";

import Link from "next/link";
import {
  FaShoppingBag,
  FaCheckCircle,
  FaUsers,
  FaGlobeAsia,
} from "react-icons/fa";

export default function AboutSection() {
  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="max-w-3xl mb-16">
          <h2 className="text-5xl font-extrabold text-gray-900 leading-tight">
            Building the Future of
            <span className="text-primary"> Smart Shopping</span>
          </h2>
          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            Smart Items is more than just an online store — it’s a
            technology-driven marketplace created for people who value
            innovation, quality, and simplicity in their everyday digital lives.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* Left Story */}
          <div className="space-y-6 text-gray-600 text-base leading-relaxed">
            <p>
              In today’s fast-paced world, technology is deeply connected to how
              we work, communicate, and live. Smart Items was founded with a
              simple vision — to make modern technology accessible and reliable
              for everyone, without complexity or confusion.
            </p>

            <p>
              From smart gadgets and accessories to productivity-enhancing
              tools, every product in our catalog is carefully selected, tested,
              and reviewed. We focus on functionality, durability, and
              real-world usefulness rather than hype.
            </p>

            <p>
              Whether you’re a student, professional, content creator, or tech
              enthusiast, Smart Items helps you upgrade your lifestyle with
              products that truly make a difference.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="flex items-start gap-3">
                <FaCheckCircle className="text-primary mt-1" />
                <span>Carefully curated smart products</span>
              </div>
              <div className="flex items-start gap-3">
                <FaCheckCircle className="text-primary mt-1" />
                <span>Transparent pricing & honest reviews</span>
              </div>
              <div className="flex items-start gap-3">
                <FaCheckCircle className="text-primary mt-1" />
                <span>Customer-first support & service</span>
              </div>
              <div className="flex items-start gap-3">
                <FaCheckCircle className="text-primary mt-1" />
                <span>Future-ready technology solutions</span>
              </div>
            </div>
          </div>

          {/* Right Values Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="p-7 bg-white rounded-2xl border hover:shadow-xl transition">
              <FaShoppingBag className="text-4xl text-primary mb-4" />
              <h4 className="text-xl font-semibold mb-2">Our Mission</h4>
              <p className="text-sm text-gray-600">
                To empower people with smart, affordable, and practical
                technology that improves everyday life and productivity.
              </p>
            </div>

            <div className="p-7 bg-white rounded-2xl border hover:shadow-xl transition">
              <FaGlobeAsia className="text-4xl text-primary mb-4" />
              <h4 className="text-xl font-semibold mb-2">Our Vision</h4>
              <p className="text-sm text-gray-600">
                To become a trusted global platform for smart lifestyle products
                that combine innovation, quality, and simplicity.
              </p>
            </div>

            <div className="p-7 bg-white rounded-2xl border hover:shadow-xl transition">
              <FaUsers className="text-4xl text-primary mb-4" />
              <h4 className="text-xl font-semibold mb-2">Community Driven</h4>
              <p className="text-sm text-gray-600">
                We listen to our customers and continuously evolve based on real
                feedback and real needs.
              </p>
            </div>

            <div className="p-7 bg-white rounded-2xl border hover:shadow-xl transition">
              <FaCheckCircle className="text-4xl text-primary mb-4" />
              <h4 className="text-xl font-semibold mb-2">Quality Promise</h4>
              <p className="text-sm text-gray-600">
                Every product goes through quality checks to ensure performance,
                reliability, and long-term value.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <h3 className="text-3xl font-bold text-gray-900">
            Upgrade Your Lifestyle with Smart Items
          </h3>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Discover innovative products designed to simplify your life, enhance
            productivity, and keep you connected to what matters most.
          </p>
          <Link href={"/allProducts"} className="btn btn-primary btn-lg mt-6">
            Browse Smart Products
          </Link>
        </div>
      </div>
    </section>
  );
}

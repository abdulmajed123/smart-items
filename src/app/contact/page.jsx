// "use client";

// import {
//   FaPhoneAlt,
//   FaEnvelope,
//   FaMapMarkerAlt,
//   FaHeadset,
// } from "react-icons/fa";
// import { getProducts } from "../actions/server/products";

// export default function ContactSection() {
//   // const data = getProducts();
//   // console.log(data);
//   return (

//   );
// }
import React from "react";
import {
  FaEnvelope,
  FaHeadset,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from "react-icons/fa";
import { getProducts } from "../actions/server/products";

const ContactPage = async () => {
  const productData = await getProducts();
  console.log(productData);
  return (
    <section className="bg-white py-28">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="max-w-3xl mx-auto mb-20 text-center">
          <h2 className="text-5xl font-extrabold text-gray-900 leading-tight">
            Get in <span className="text-primary">Touch</span>
          </h2>
          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            Have questions or need support? Our team is always ready to help you
            with any queries regarding products, orders, or collaborations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info Cards */}
          <div className="space-y-6">
            <div className="p-8 bg-white border border-gray-200 rounded-2xl shadow hover:shadow-xl transition duration-300">
              <FaPhoneAlt className="text-4xl text-primary mb-4" />
              <h4 className="text-xl font-semibold mb-2">Call Us</h4>
              <p className="text-gray-600">+880 1234-567890</p>
              <p className="text-gray-400 text-xs mt-1">
                Sun – Thu (9:00 AM – 6:00 PM)
              </p>
            </div>

            <div className="p-8 bg-white border border-gray-200 rounded-2xl shadow hover:shadow-xl transition duration-300">
              <FaEnvelope className="text-4xl text-primary mb-4" />
              <h4 className="text-xl font-semibold mb-2">Email Support</h4>
              <p className="text-gray-600">support@smartitems.com</p>
              <p className="text-gray-400 text-xs mt-1">
                We reply within 24 hours
              </p>
            </div>

            <div className="p-8 bg-white border border-gray-200 rounded-2xl shadow hover:shadow-xl transition duration-300">
              <FaMapMarkerAlt className="text-4xl text-primary mb-4" />
              <h4 className="text-xl font-semibold mb-2">Our Location</h4>
              <p className="text-gray-600">Dhaka, Bangladesh</p>
              <p className="text-gray-400 text-xs mt-1">
                Serving customers nationwide
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 bg-white border border-gray-200 rounded-3xl shadow-lg p-12">
            <div className="flex items-center gap-3 mb-8">
              <FaHeadset className="text-4xl text-primary" />
              <h3 className="text-3xl font-bold text-gray-900">
                Send Us a Message
              </h3>
            </div>

            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Your Name"
                className="input input-bordered w-full border-gray-300 focus:border-primary focus:ring focus:ring-primary/20"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="input input-bordered w-full border-gray-300 focus:border-primary focus:ring focus:ring-primary/20"
              />

              <input
                type="text"
                placeholder="Subject"
                className="input input-bordered w-full md:col-span-2 border-gray-300 focus:border-primary focus:ring focus:ring-primary/20"
              />

              <textarea
                placeholder="Your Message"
                rows="6"
                className="textarea textarea-bordered w-full md:col-span-2 border-gray-300 focus:border-primary focus:ring focus:ring-primary/20"
              ></textarea>

              <button className="btn btn-primary btn-lg md:col-span-2 hover:scale-105 transition-transform duration-200">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;

import BestDeals from "@/Components/BestDeals/BestDeals";
import Categories from "@/Components/Categories/Categories";
import CTA from "@/Components/CTA/CTA";
import Banner from "@/Components/Home/Banner";
import Products from "@/Components/Home/Products";
import Testimonials from "@/Components/Testimonials/Testimonials";
import WhyChooseUs from "@/Components/WhyChooseUs/WhyChooseUse";
import React from "react";

const Home = () => {
  return (
    <div className="space-y-10">
      <Banner></Banner>
      <Products></Products>
      <Categories></Categories>
      <WhyChooseUs></WhyChooseUs>
      <BestDeals></BestDeals>
      <Testimonials></Testimonials>
      <CTA></CTA>
    </div>
  );
};

export default Home;

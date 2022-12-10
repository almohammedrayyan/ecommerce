import React from "react";
import Announcemnet from "../component/Announcemnet";
import Navbar from "../component/Navbar";
import Slider from "../component/Slider";
import Categories from "../component/Categories";
import Product from "../component/Product";
import NewsLetter from "../component/NewsLetter";
import Footer from "../component/Footer";
const HomePage = () => {
  return (
    <>
      <Announcemnet />
      <Navbar />
      <Slider />
      <Categories />
      <Product />
      <NewsLetter />
      <Footer />
    </>
  );
};

export default HomePage;

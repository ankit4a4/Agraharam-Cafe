"use client";
import React from "react";
import ProductHero from "../../components/products/ProductHero"; // adjust the path if needed
import ProductSection from "../../components/products/ProductSection"; // adjust the path if needed

const ProductPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <ProductHero />

      {/* Product Cards Section */}
      <ProductSection />
    </div>
  );
};

export default ProductPage;

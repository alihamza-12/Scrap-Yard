import React from "react";
import PageLayOut from "../components/PagesLayout/PageLayOut";

import ProductsComponent from "../components/Products/ProductsComponent";

const Products = () => {
  return (
    <div>
      <PageLayOut />
      {/* Products */}
      <ProductsComponent />
    </div>
  );
};

export default Products;

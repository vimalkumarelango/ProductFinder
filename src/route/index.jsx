import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ROUTE from "../constant/routeConstant";
import ProductDetail from "../pages/ProductDetail";
import ProductHome from "../pages/ProductHome";

function RouterPage() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<ProductHome />} path={ROUTE.HOME} />
        <Route element={<ProductDetail />} path={`${ROUTE.PRODUCT_DETAIL}/:id`} />
      </Routes>
    </BrowserRouter>
  );
}

export default RouterPage;

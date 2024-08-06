import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ROUTE from "../constant/routeConstant";
import ImageSearch from "../pages/ImageSearch";
import ImageDetail from "../pages/ImageDetail";

function RouterPage() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<ImageSearch />} path={ROUTE.HOME} />
        <Route element={<ImageDetail />} path={`${ROUTE.IMAGE_DETAIL}/:id`} />
      </Routes>
    </BrowserRouter>
  );
}

export default RouterPage;

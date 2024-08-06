import { Box } from "@mui/system";
import React, { useEffect, useReducer, useState } from "react";
import Search from "../../components/Search";
import Wrapper from "../../components/Wrapper";
import actionTypes from "../../constant/types";
import { getProducts } from "../../service/productService";
import Products from "./Products";

const reducer = (state, { type, payload }) => {
  switch (type) {
    case actionTypes.DATA:
      return { ...state, data: payload };
    case actionTypes.LOADING:
      return { ...state, isLoading: payload };
    case actionTypes.ERROR:
      return { ...state, isError: payload };
    default:
      return state;
  }
};

const initialState = {
  data: [],
  isLoading: false,
  isError: false,
};

function ProductHome() {
  const [products, dispatch] = useReducer(reducer, initialState);
  const [search, setSearch] = useState("");

  const { isLoading, isError } = products;

  useEffect(() => {
    getProducts(dispatch);
  }, []);

  return (
    <Wrapper isLoading={isLoading} isError={isError}>
      <Box padding={4}>
        <Box display="flex" justifyContent="flex-end">
          <Search onChange={(e) => setSearch(e.target.value)} value={search} />
        </Box>
        <Products searchKey={search} products={products} />
      </Box>
    </Wrapper>
  );
}

export default ProductHome;

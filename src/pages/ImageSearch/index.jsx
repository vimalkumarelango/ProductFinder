import { Box } from "@mui/system";
import React, { useEffect, useReducer, useState } from "react";
import Search from "../../components/Search";
import Wrapper from "../../components/Wrapper";
import actionTypes from "../../constant/types";
import { getImages } from "../../service/ImageService";
import ImageList from "./ImageList";

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

function ImageSearch() {
  const [images, dispatch] = useReducer(reducer, initialState);
  const [search, setSearch] = useState("");

  const { isLoading, isError } = images;

  useEffect(() => {
    getImages(dispatch);
  }, []);

  return (
    <Wrapper isLoading={isLoading} isError={isError}>
      <Box padding={4}>
        <Box display="flex" justifyContent="flex-end">
          <Search onChange={(e) => setSearch(e.target.value)} value={search} />
        </Box>
        <ImageList searchKey={search} images={images} />
      </Box>
    </Wrapper>
  );
}

export default ImageSearch;

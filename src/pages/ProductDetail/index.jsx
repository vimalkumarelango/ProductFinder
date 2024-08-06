import { Box, Container, Grid, Stack } from "@mui/material";
import React, { useEffect, useReducer } from "react";
import { Link, useParams } from "react-router-dom";
import Description from "./Description";
import Gallery from "../../components/Gallery";
import actionTypes from "../../constant/types";
import { getIndividualProduct } from "../../service/productService";
import Wrapper from "../../components/Wrapper";
import ROUTE from "../../constant/routeConstant";

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
  data: {},
  isLoading: false,
  isError: false,
};

function ProductDetail() {
  const { id } = useParams();
  const [product, dispatch] = useReducer(reducer, initialState);

  const {
    data: { price, description, returnPolicy, title, images },
    isLoading,
    isError
  } = product;

  useEffect(() => {
    getIndividualProduct(id, dispatch);
  }, []);

  return (
    <Wrapper isLoading={isLoading} isError={isError}>
      <Box padding={6}>
        <Stack
          width="100%"
          display="flex"
          flexDirection="row"
          justifyContent="flex-end"
        >
          <Link to={ROUTE.HOME}>Go Back</Link>
        </Stack>
        <Container component="section" maxWidth={"lg"}>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Gallery itemData={images} />
            </Grid>
            <Grid item xs={12} md={6}>
              <Description
                desc={description}
                price={price}
                subTitle={returnPolicy}
                title={title}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Wrapper>
  );
}

export default ProductDetail;

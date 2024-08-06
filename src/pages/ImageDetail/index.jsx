import { Box, Button, Container, Stack } from "@mui/material";
import React, { useEffect, useReducer } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Description from "./Description";
import Gallery from "../../components/Gallery";
import actionTypes from "../../constant/types";
import { getIndividualImage } from "../../service/ImageService";
import Wrapper from "../../components/Wrapper";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

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

function ImageDetail() {
  const { id } = useParams();
  const [image, dispatch] = useReducer(reducer, initialState);

  const navigate = useNavigate();

  const {
    data: { urls, alt_description, likes, downloads, views },
    isLoading,
    isError,
  } = image;

  const goBack = () => navigate(-1);

  useEffect(() => {
    getIndividualImage(id, dispatch);
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
          <Button
            variant="outlined"
            startIcon={<ArrowBackIosIcon />}
            onClick={goBack}
          >
            Go back
          </Button>
        </Stack>
        <Container component="section" maxWidth={"lg"}>
          <Box padding={4}>
            <Gallery src={urls?.full} />
            <Description
              title={alt_description}
              likes={likes}
              downloads={downloads}
              views={views}
            />
          </Box>
        </Container>
      </Box>
    </Wrapper>
  );
}

export default ImageDetail;

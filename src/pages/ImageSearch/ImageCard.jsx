import { Grid, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import Image from "../../components/Image";
import ROUTE from "../../constant/routeConstant";

function ImageCard({ title, productImage, id }) {
  return (
    <Grid item xs={12} md={4}>
      <Image src={productImage} objectFit="cover" />
      <Link to={`${ROUTE.IMAGE_DETAIL}/${id}`}>
        <Typography variant="h1">{title}</Typography>
      </Link>
    </Grid>
  );
}

export default ImageCard;

import { Grid, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import Image from "../../components/Image";
import ROUTE from "../../constant/routeConstant";

function ProductCard({ title, desc, price, productImage, id }) {
  return (
    <Grid item xs={12} md={4}>
      <Image src={productImage} />
      <Link to={`${ROUTE.PRODUCT_DETAIL}/${id}`}>
        <Typography variant="h1">{title}</Typography>
      </Link>
      <Typography variant="body1" color="gray">
        {desc}
      </Typography>
      <Typography variant="subtitle1">$ {price}</Typography>
    </Grid>
  );
}

export default ProductCard;

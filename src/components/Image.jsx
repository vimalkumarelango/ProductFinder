import { Box } from "@mui/material";
import React from "react";

function Image({
  src,
  width = "100%",
  height = 200,
  alt = "Product",
  objectFit = "contain",
}) {
  return (
    <Box
      component="img"
      sx={{
        width,
        height,
        objectFit,
      }}
      alt={alt}
      src={src}
    />
  );
}

export default Image;

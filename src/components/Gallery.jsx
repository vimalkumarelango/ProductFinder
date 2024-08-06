import { ImageList, ImageListItem } from "@mui/material";
import React from "react";



const Gallery = ({ itemData = [] }) => {
  return (
    <ImageList sx={{ width: "100%" }} variant="quilted" cols={2} rowHeight={300}>
      {itemData.map((item) => (
        <ImageListItem key={item} cols={1} rows={1}>
          <img src={item} alt="product" loading="lazy" />
        </ImageListItem>
      ))}
    </ImageList>
  );
};

export default Gallery;

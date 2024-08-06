import React from "react";
import Image from "./Image";

const Gallery = ({ src = "" }) => {
  return <Image src={src} height="auto" style={{ maxHeight: 500 }} />;
};

export default Gallery;

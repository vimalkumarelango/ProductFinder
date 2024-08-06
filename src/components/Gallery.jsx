import React from "react";
import Image from "./Image";



const Gallery = ({ src = "" }) => {
  return (
    <Image src={src} height={500} />
  );
};

export default Gallery;

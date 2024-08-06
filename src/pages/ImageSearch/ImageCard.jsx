import { ImageList, ImageListItem, ImageListItemBar } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import ROUTE from "../../constant/routeConstant";

function ImageCard({ itemData }) {
  const navigate = useNavigate();
  const handleNavigate = (id) => {
    navigate(`${ROUTE.IMAGE_DETAIL}/${id}`);
  };
  return (
    <ImageList sx={{ width: "100%" }} cols={3}>
      {itemData.map(({ alt_description, description, urls, user, id }) => (
        <ImageListItem key={id}>
          <img
            srcSet={`${urls.regular}`}
            src={`${urls.regular}`}
            alt={description}
            loading="lazy"
            onClick={() => handleNavigate(id)}
          />
          <ImageListItemBar
            title={description || alt_description}
            subtitle={`@${user.name}`}
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

export default ImageCard;

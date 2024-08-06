import { Box, Chip, Rating, Stack, Typography } from "@mui/material";
import React from "react";

const Description = ({
  title,
  subTitle,
  desc,
  price,
  tags,
  warranty,
  rating,
}) => {
  return (
    <Box
      height="100%"
      display="flex"
      justifyContent="center"
      gap={2}
      flexDirection="column"
    >
      <Typography variant="h1">{title}</Typography>
      <Typography variant="subtitle1">{subTitle}</Typography>
      <Typography variant="body1">{desc}</Typography>
      <Typography variant="h1">${price}</Typography>
      <small>{warranty}</small>
      <Rating value={rating} readOnly />
      {Array.isArray(tags) && (
        <Stack direction="row" spacing={1}>
          {tags.map((item, idx) => (
            <Chip label={item} key={idx} />
          ))}
        </Stack>
      )}
    </Box>
  );
};

export default Description;

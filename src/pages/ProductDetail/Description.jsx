import { Box, Typography } from "@mui/material";
import React from "react";

const Description = ({ title, subTitle, desc, price }) => {
  return (
    <Box height="100%" display="flex" justifyContent="center" gap={2} flexDirection="column">
      <Typography variant="h1">{title}</Typography>
      <Typography variant="subtitle1">{subTitle}</Typography>
      <Typography variant="body1">
       {desc}
      </Typography>
      <Typography variant="h1">${price}</Typography>
    </Box>
  );
};

export default Description;

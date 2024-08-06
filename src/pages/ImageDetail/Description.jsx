import { Box, Stack, Typography } from "@mui/material";
import React from "react";

const Text = ({ head, value }) => {
  return (
    <Stack>
      <Typography variant="subtitle1">{head}</Typography>
      <Typography variant="body1" color="GrayText">
        {value || "-"}
      </Typography>
    </Stack>
  );
};

const Description = ({ title, likes, downloads, views }) => {
  return (
    <Box paddingY={2} display="flex" flexDirection="column" alignItems="center">
      <Typography variant="h1">{title}</Typography>
      <Box display="flex" gap={4} marginTop={4}>
        <Text head="Likes" value={likes} />
        <Text head="Downloads" value={downloads} />
        <Text head="Views" value={views} />
      </Box>
    </Box>
  );
};

export default Description;

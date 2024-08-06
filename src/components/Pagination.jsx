import React from "react";
import MuiPagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

function Pagination({ count, onChange, page }) {
  const handlePageChange = (_, selectedPage) => {
    if (typeof onChange === "function") onChange(selectedPage);
  };
  return (
    <Stack spacing={2} margin={4} width="100%">
      <MuiPagination
        count={count}
        page={page}
        shape="rounded"
        onChange={handlePageChange}
      />
    </Stack>
  );
}

export default Pagination;

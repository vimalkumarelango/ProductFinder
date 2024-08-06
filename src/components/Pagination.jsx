import React, { useEffect, useState } from "react";
import MuiPagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

function Pagination({ count, rowSize = 6, onChange }) {
  const [page, setPage] = useState(1);
  const handlePageChange = (_, selectedPage) => {
    setPage(selectedPage);
  };

  useEffect(() => {
    if (typeof onChange === "function") {
      const pageIndex = page - 1;
      const start = pageIndex * rowSize;
      const end = start + rowSize;
      onChange({
        page,
        start,
        end,
      });
    }
  }, [page]);

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

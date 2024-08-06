import { Alert, Grid, Stack } from "@mui/material";
import React, { useEffect, useMemo, useState } from "react";
import Pagination from "../../components/Pagination";
import ImageCard from "./ImageCard";

const rowSize = 6;

function ImageList({ searchKey, images }) {
  const [page, setPage] = useState(1);

  const data = useMemo(() => {
    return images.data.filter(({ alt_description }) =>
      alt_description.toLowerCase().includes(searchKey.toLowerCase())
    );
  }, [searchKey, images.data]);

  const totalCount = useMemo(() => Math.ceil(data.length / rowSize), [data]);

  const { start, end } = useMemo(() => {
    let start = 0;
    let end = 0;

    if (typeof page === "number") {
      const pageIndex = page - 1;
      start = pageIndex * rowSize;
      end = start + rowSize;
    }

    return {
      start,
      end,
    };
  }, [page]);

  useEffect(() => {
    if (totalCount < page) {
      setPage(1);
    }
  }, [totalCount]);

  return (
    <Grid container spacing={4} marginY={1}>
      {data.length > 0 ? (
        <ImageCard itemData={data.slice(start, end)} />
      ) : (
        <Grid item xs={12}>
          <Stack
            display="flex"
            width="100%"
            justifyContent="center"
            paddingY={4}
          >
            <Alert severity="info">No result found</Alert>
          </Stack>
        </Grid>
      )}
      <Pagination page={page} count={totalCount} onChange={setPage} />
    </Grid>
  );
}

export default ImageList;

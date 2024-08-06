import { Grid } from "@mui/material";
import React, { useMemo, useState } from "react";
import Pagination from "../../components/Pagination";
import ProductCard from "./ProductCard";

const rowSize = 6;

function Products({ searchKey, products }) {
  const [page, setPage] = useState({});

  const data = useMemo(() => {
    return products.data.filter(({ title }) =>
      title.toLowerCase().includes(searchKey.toLowerCase())
    );
  }, [searchKey, products.data]);

  const totalCount = useMemo(() => Math.ceil(data.length / rowSize), [data]);

  return (
    <Grid container spacing={4}>
      {data
        .slice(page.start, page.end)
        .map(({ price, description, title, thumbnail, id }, idx) => (
          <ProductCard
            key={idx}
            desc={description}
            title={title}
            price={price}
            productImage={thumbnail}
            id={id}
          />
        ))}
      <Pagination count={totalCount} rowSize={rowSize} onChange={setPage} />
    </Grid>
  );
}

export default Products;

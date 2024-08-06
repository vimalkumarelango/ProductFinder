import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { InputAdornment, TextField } from "@mui/material";

function Search(props) {
  return (
    <TextField
      {...props}
      id="search"
      type="search"
      placeholder="Search"
      sx={{ maxWidth: 250 }}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
    />
  );
}

export default Search;

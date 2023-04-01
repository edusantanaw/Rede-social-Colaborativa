import React from "react";
import { Skeleton } from "@mui/material";

const ItemSkeleton = () => {
  return (
    <Skeleton
      variant="rectangular"
      sx={{
        width: "11.3em",
        height: "5.5em",
        background: "rgb(15, 15, 15)",
        padding: "0.6em",
        borderRadius: "5px",
      }}
    />
  );
};

export default ItemSkeleton;

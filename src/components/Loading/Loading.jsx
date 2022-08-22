import Grid from "@mui/material/Grid";
import Skeleton from "@mui/material/Skeleton";
import React from "react";
import "./Loading.scss";

const Loading = () => {
  return (
    <Grid container className="cocktail-app__loading">
      <Skeleton variant="rectangular" width={368} height={320} />
      <Skeleton variant="rectangular" width={368} height={320} />
      <Skeleton variant="rectangular" width={368} height={320} />
    </Grid>
  );
};

export default Loading;

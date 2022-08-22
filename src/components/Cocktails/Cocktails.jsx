import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import React from "react";
import { Link } from "react-router-dom";

const Cocktails = ({
  idDrink,
  strGlass,
  strAlcoholic,
  strDrink,
  strDrinkThumb,
}) => {
  return (
    <Card sx={{ width: 360 }}>
      {strDrinkThumb ? (
        <CardMedia
          component="img"
          height="320"
          image={strDrinkThumb}
          alt={strDrink}
        />
      ) : (
        <CardMedia
          component="img"
          height="320"
          image="https://via.placeholder.com/150/?text=No+image"
          alt={strDrink}
        />
      )}
      <CardContent>
        <Typography gutterBottom variant="h4" component="div" marginBottom={0}>
          {strDrink ? strDrink : "strDrink"}
        </Typography>
        <Typography variant="h5" marginBottom={1}>
          {strGlass ? strGlass : "strGlass"}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {strAlcoholic ? strAlcoholic : "strAlcoholic"}
        </Typography>
      </CardContent>
      <CardActions>
        <Link to={`/cocktail/${idDrink}`}>
          <Button size="small">Learn More</Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default Cocktails;

import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import "./ProductCard.css";

const ProductCard = ({ item }) => {
  return (
    <Card sx={{ maxWidth: 300 }} variant="outlined">
      <CardMedia
        sx={{ height: 250 }}
        image={item.img}
        title={`image ${item.title}`}
      />
      <div className="fondo">
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {item.title}
          </Typography>
          <Typography variant="h7" color="text.primary">
            {item.description}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            $ {item.price} .-
          </Typography>
        </CardContent>

        <CardActions>
          <Link to={`/itemDetail/${item.id}`}>
            <Button size="small" variant="contained" className="button">
              Ver Producto
            </Button>
          </Link>
        </CardActions>
      </div>
    </Card>
  );
};

export default ProductCard;

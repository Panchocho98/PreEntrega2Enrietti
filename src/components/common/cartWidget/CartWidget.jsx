import { Badge } from "@mui/material";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import { Link } from "react-router-dom";

const CartWidget = () => {
  return (
    <Link to="/cart">
      <Badge badgeContent={0} showZero color="primary">
        <ShoppingCartCheckoutIcon color="action" />
      </Badge>
    </Link>
  );
};

export default CartWidget;

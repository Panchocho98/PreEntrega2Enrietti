import { Button, IconButton } from "@mui/material";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";
import Swal from "sweetalert2";
import RemoveIcon from "@mui/icons-material/Remove";
import "./Cart.css";

const Cart = () => {
  const { cart, clearCart, deleteProductById, getTotalPrice } =
    useContext(CartContext);

  let total = getTotalPrice();

  const clearCartWithAlert = () => {
    Swal.fire({
      title: "¿Quieres limpiar el carro?",
      showDenyButton: false,
      showCancelButton: true,
      cancelButtonText: `No`,
      confirmButtonText: "Limpiar carro",
    }).then((result) => {
      if (result.isConfirmed) {
        clearCart();
        Swal.fire("Carro limpio.", "");
      }
    });
  };

  return (
    <div className="cart-container">
      <h1>Carro de compras</h1>

      {cart.map((product) => (
        <div key={product.id} className="cart-item">
          <div className="details">
            <div>
              <h2>{product.title}</h2>
              <h3>${product.price}</h3>
              <h3>Cantidad: {product.quantity}</h3>
            </div>
            <IconButton onClick={() => deleteProductById(product.id)}>
              <RemoveIcon color="primary" />
            </IconButton>
          </div>
        </div>
      ))}

      {cart.length > 0 && (
        <div>
          <h2>El total a pagar es: ${total}</h2>

          <div className="buttons-container">
            <Link to="/checkout">
              <Button variant="contained" className="checkout-button">
                Finalizar compra
              </Button>
            </Link>

            <Button
              variant="contained"
              onClick={clearCartWithAlert}
              className="clear-cart-button"
            >
              Vaciar Carrito
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;

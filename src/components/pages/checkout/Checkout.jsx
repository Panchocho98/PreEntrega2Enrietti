import { useContext, useState } from "react";
import { CartContext } from "../../../context/CartContext";
import { serverTimestamp } from "firebase/firestore";
import { database } from "../../../firebaseConfig";
import { collection, addDoc, updateDoc, doc } from "firebase/firestore";
import { Link } from "react-router-dom";
import "./Checkout.css";

const CheckoutOficial = () => {
  const [userData, setUserData] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const [orderId, setOrderId] = useState(null);

  const { cart, getTotalPrice, clearCart } = useContext(CartContext);

  const total = getTotalPrice();

  const handleChange = (evento) => {
    setUserData({ ...userData, [evento.target.name]: evento.target.value });
  };

  const handleSubmit = (evento) => {
    evento.preventDefault();

    let order = {
      buyer: userData,
      items: cart,
      total,
      date: serverTimestamp(),
    };

    const ordersCollection = collection(database, "orders");

    addDoc(ordersCollection, order).then((res) => setOrderId(res.id));

    cart.forEach((elemento) => {
      updateDoc(doc(database, "products", elemento.id), {
        stock: elemento.stock - elemento.quantity,
      });
    });

    clearCart();
  };

  return (
    <div className="checkout-container">
      {orderId ? (
        <div>
          <h2 className="success-message">
            Gracias por su compra, su numero de comprobante es {orderId}
          </h2>
          <Link to="/" className="continue-shopping-link">
            Seguir comprando
          </Link>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Nombre y Apellido"
            name="name"
            className="form-input"
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Numero de Telefono"
            name="phone"
            className="form-input"
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Correo Electronico"
            name="email"
            className="form-input"
            onChange={handleChange}
          />
          <button type="submit" className="form-button">
            Comprar
          </button>
        </form>
      )}
    </div>
  );
};

export default CheckoutOficial;

import { Button } from "@mui/material";
import "./Counter.css";

const CounterPresentacional = ({ sumar, contador, restar, onAdd }) => {
  return (
    <div className="container">
      <Button onClick={sumar} variant="outlined" color="success">
        Agregar Unidad
      </Button>

      <h3 className="counter"> {contador} </h3>
      <Button onClick={restar} variant="outlined" color="error">
        Quitar Unidad
      </Button>

      <Button
        onClick={() => onAdd(contador)}
        variant="contained"
        color="success"
      >
        Agregar al carrito
      </Button>
    </div>
  );
};

export default CounterPresentacional;

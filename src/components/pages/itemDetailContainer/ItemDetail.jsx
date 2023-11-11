import CounterContainer from "../../common/counter/CounterContainer";
import "./ItemDetail.css";

export const ItemDetail = ({ productSelected, onAdd, initial }) => {
  return (
    <div className="detail">
      <h2>{productSelected.title}</h2>
      <img src={productSelected.img} className="image" />
      {initial && <h5>Hay {initial} en el carro</h5>}

      <CounterContainer
        stock={productSelected.stock}
        onAdd={onAdd}
        initial={initial}
      />
    </div>
  );
};

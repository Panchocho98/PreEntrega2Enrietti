import { BrowserRouter } from "react-router-dom";
import AppBrowser from "./routing/AppBrowser";
import CartContextComponent from "./context/CartContext";

function App() {
  return (
    <BrowserRouter>
      <CartContextComponent>
        <AppBrowser />
      </CartContextComponent>
    </BrowserRouter>
  );
}

export default App;

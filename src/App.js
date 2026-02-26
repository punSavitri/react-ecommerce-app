import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Cart from "./pages/Cart";
import LoginSignup from "./pages/LoginSignup";
import Product from "./pages/Product";
import Shop from "./pages/Shop";
import ShopCategory from "./pages/ShopCategory";

function App() {
  return (
    <div>
      <Navbar />
      {/* Shop page is a home page */}
      <Shop />
      <ShopCategory />
      <Product />
      <Cart />
      <LoginSignup />
    </div>
  );
}

export default App;

import "./App.css";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./pages/Cart";
import LoginSignup from "./pages/LoginSignup";
import Product from "./pages/Product";
import Shop from "./pages/Shop";
import ShopCategory from "./pages/ShopCategory";
import men_banner from "./components/assets/banner_mens.png";
import women_banner from "./components/assets/banner_women.png";
import kids_banner from "./components/assets/banner_kids.png";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div>
      {/* setting routes */}
      <BrowserRouter>
        <Navbar />
        <Routes>
          {/* Shop page is a home page */}
          <Route path="/" element={<Shop />} />
          <Route
            path="/mens"
            element={<ShopCategory category="men" banner={men_banner} />}
          />
          <Route
            path="/womens"
            element={<ShopCategory category="women" banner={women_banner} />}
          />
          <Route
            path="/kids"
            element={<ShopCategory category="kid" banner={kids_banner} />}
          />
          {/* setting route for product */}

          <Route path="/product" element={<Product />}>
            {/* setting route for product id path */}
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignup />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

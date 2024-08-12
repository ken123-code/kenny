import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import NotFound from "./components/notFound/NotFound";
import Product from "./pages/product/Product";
import Register from "./pages/register/Register";
import ProductDetail from "./pages/productDetail/ProductDetail";
import "../src/style.css"
import { AppProvider } from "./AppContext";

// import Cart from "./components/redux/Cart";
import Redux1 from "./components/redux/Redux1";
import ProductsList from "./components/redux/ProductsList";
import Cart from "./components/cart/Cart";
import Cats from "./components/redux/Cats";

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


function App() {
  return (
    <div>
      <AppProvider>
          <Router>
                <Routes>
                    <Route index element={<Home />}></Route>
                    <Route path="/product" element={<Product />}></Route>
                    <Route path="/detail/:id" element={<ProductDetail />}></Route>
                    <Route path="/register" element={<Register />}></Route>
                    <Route path="/*" element={<NotFound />}></Route>
                    <Route path="/cart" element={<Cart />}></Route>
                </Routes>
            </Router>
      </AppProvider>
      {/* <Redux1/>
      <ProductsList/>
      <Cart/> */}
      {/* <Cats/> */}
    </div>
  );
}

export default App;

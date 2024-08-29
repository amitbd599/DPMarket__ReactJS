import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import RouteScrollToTop from "./helper/RouteScrollToTop";
import ScrollToTop from "react-scroll-to-top";
import HomePageTwo from "./pages/HomePageTwo";
import AllProductPage from "./pages/AllProductPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import ProfilePage from "./pages/ProfilePage";
import CartPage from "./pages/CartPage";
import CartPersonalPage from "./pages/CartPersonalPage";
import CartPaymentPage from "./pages/CartPaymentPage";
import CartThankYouPage from "./pages/CartThankYouPage";


function App() {
  return (
    <BrowserRouter>
      <RouteScrollToTop />
      <ScrollToTop smooth color="#E8092E" />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/index-two" element={<HomePageTwo />} />
        <Route exact path="/all-product" element={<AllProductPage />} />
        <Route exact path="/product-details" element={<ProductDetailsPage />} />
        <Route exact path="/profile" element={<ProfilePage />} />
        <Route exact path="/cart" element={<CartPage />} />
        <Route exact path="/cart-personal" element={<CartPersonalPage />} />
        <Route exact path="/cart-payment" element={<CartPaymentPage />} />
        <Route exact path="/cart-thank-you" element={<CartThankYouPage />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;

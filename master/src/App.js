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
import DashboardPage from "./pages/DashboardPage";
import DashboardProfilePage from "./pages/DashboardProfilePage";
import FollowerPage from "./pages/FollowerPage";
import FollowingPage from "./pages/FollowingPage";
import SettingPage from "./pages/SettingPage";


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
        <Route exact path="/dashboard" element={<DashboardPage />} />
        <Route exact path="/dashboard-profile" element={<DashboardProfilePage />} />
        <Route exact path="/follower" element={<FollowerPage />} />
        <Route exact path="/following" element={<FollowingPage />} />
        <Route exact path="/setting" element={<SettingPage />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;

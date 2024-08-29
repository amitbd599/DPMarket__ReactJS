import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import RouteScrollToTop from "./helper/RouteScrollToTop";
import ScrollToTop from "react-scroll-to-top";
import HomePageTwo from "./pages/HomePageTwo";
import AllProductPage from "./pages/AllProductPage";


function App() {
  return (
    <BrowserRouter>
      <RouteScrollToTop />
      <ScrollToTop smooth color="#E8092E" />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/index-two" element={<HomePageTwo />} />
        <Route exact path="/all-product" element={<AllProductPage />} />
     
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";


function App() {
  return (
    <BrowserRouter>
      {/* <RouteScrollToTop /> */}
      {/* <ScrollToTop smooth color="#E8092E" /> */}
      <Routes>
        <Route exact path="/" element={<HomePage />} />
     
      </Routes>
    </BrowserRouter>
  );
}

export default App;

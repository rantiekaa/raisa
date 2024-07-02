import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import DetailProduct from "./pages/DetailProduct";
import PageNotFound from "./components/home/PageNotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/detail-product/:id" element={<DetailProduct />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default App;

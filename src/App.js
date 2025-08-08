import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Footer from "./components/Footer";
import ProductsProvider from "./context/ProductsContext";


function App() {
  return (
      <ProductsProvider>
        <Navbar />
        <Routes>
          <Route path="/product" element={<Products />} />
        </Routes>
        <Footer />
      </ProductsProvider>
    
  );
}

export default App;

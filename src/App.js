import { BrowserRouter, Routes, Route } from "react-router-dom";
import ShopingCart from "./components/ShopingCart/ShopingCart";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";


function App(props) {
  console.log(props);
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/card" element={<ShopingCart />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

// import Card from './components/Card/Card';
// import ModalDialog from './components/ModalDialog/ModalDialog';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import InfoCard from "./components/InfoCard/InfoCard";
import ShopingCart from "./components/ShopingCart/ShopingCart";

function App() {
  return (
    <BrowserRouter>
      <div>
        {/* <Card />
      <ModalDialog /> */}
        <InfoCard />
        {/* <ShopingCart /> */}
        <Routes>
          <Route path="/card" element={<ShopingCart />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

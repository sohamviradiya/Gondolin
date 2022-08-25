import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Home from "./Home";
import Shop from "./Shop";
import Header from "./components/Header";
import Product from "./components/Product";

const RouteSwitch = () => {
     return (
          <BrowserRouter>
               <Header />
               <div className="my-5 p-5 bg-dark">
                    <Routes>
                         <Route path="/" element={<Home />} />
                         <Route path="/shop" element={<Shop />} />
                         <Route path="*" element={<Product/>}/>
                    </Routes>
               </div>
          </BrowserRouter>
     );
};

export default RouteSwitch;
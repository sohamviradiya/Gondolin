import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Home from "./Home";
import Shop from "./Shop";
import Header from "./components/Header";
const RouteSwitch = () => {
     return (
          <BrowserRouter>
               <Header />
               <div className="my-5 p-5">
                    <Routes>
                         <Route path="/" element={<Home />} />
                         <Route path="/shop" element={<Shop />} />
                    </Routes>
               </div>
          </BrowserRouter>
     );
};

export default RouteSwitch;
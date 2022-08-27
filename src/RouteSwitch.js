import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./Home";
import Shop from "./Shop";
import Header from "./components/Header";
import Product from "./components/Product";
import Cart from "./Cart";
import { useState } from "react";

const RouteSwitch = () => {
     const [cartitems, setCartitems] = useState([]);

     const remove_title = (title) => {
          setCartitems(cartitems.filter(item => item.title !== title));
     }

     const add_title = (title, quantity) => {
          const newItem = {
               title: title,
               quantity: quantity
          };
          setCartitems([...cartitems.filter(item => (item.title != title)), newItem]);
     }
     
     return (
          <BrowserRouter>
               <Header />
               <div className="my-5 p-5 bg-dark">
                    <Routes>
                         <Route path="/" element={<Home />} />
                         <Route path="/cart" element={<Cart remove={remove_title} items={cartitems} />}/>
                         <Route path="/shop" element={<Shop/>} />
                         <Route path="*" element={<Product add={add_title} />}/>
                    </Routes>
               </div>
          </BrowserRouter>
     );
};

export default RouteSwitch;
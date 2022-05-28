import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, {useState} from "react";
//import { faker } from '@faker-js/faker';
import productslst from "./Productslst";
import App from "./App";
import About from "./componenets/About";
import Cart from "./componenets/Cart";
import Product from "./componenets/Product";


// const productslst = [...Array(6)].map(() => ({
//     id: faker.datatype.uuid(),
//     name: faker.commerce.product(),
//     price: faker.commerce.price(),
//     image:faker.image.fashion()
// }))

export const productsContext = React.createContext()
export const cartContext = React.createContext()
export const onAddContext = React.createContext()
export const onDeleteContext = React.createContext()


const RouteSwitch = () => {
    const [cart, setCart] = useState([]);
    const [ products, setProduct] = useState(productslst)
    const onAdd = (product) => {
        const exist = cart.find((item) => item.id === product.id)
        if (exist){
            setCart(cart.map((item) => item.id === product.id? {...exist, qty: exist.qty + 1}: item))
        }else{
            setCart([...cart, {...product, qty:1}])
        }
    }
    const onDelete = (product) => {
        const exist = cart.find((item) => item.id === product.id)
        if (exist){
            if (exist.qty === 1){
                setCart(cart.filter((item) => item.id !== product.id))
            }else{
                setCart(cart.map((item) => item.id === product.id? {...exist, qty:exist.qty-1}: item))
            }
        }
    }
  return (
      <productsContext.Provider value={products}>
          <cartContext.Provider value={cart}>
              <onAddContext.Provider value={onAdd}>
                  <onDeleteContext.Provider value={onDelete}>
                        <BrowserRouter>           
                            <Routes>
                                <Route path="/" element={<App />} />
                                <Route path="/about" element={<About />} />
                                <Route path="/products" element = {<Product/>}/>
                                <Route path="/cart" element = {<Cart/>}/>
                            </Routes>
                        </BrowserRouter>
                  </onDeleteContext.Provider>
              </onAddContext.Provider>
          </cartContext.Provider>
       </productsContext.Provider>
  );
};

export default RouteSwitch;
import { useState } from "react";

import { ThemeProvider } from "styled-components";
import { lightTheme } from "./themes";

import GlobalStyles from "./components/styled/Global";
import Header from "./components/Header";
import Product from "./components/Product";





function App() {
  const [ cartContents, setCartContents ] = useState([]);

  function addToCart(name, price, quantity, img) {

    const existingCartItem = cartContents.find(item => item.id == name);

    if(existingCartItem) {
      const currentQuantity = existingCartItem.quantity;
      existingCartItem.quantity = currentQuantity + quantity;
    } else {
        const newCartItem = {
          id: name,
          name: name, 
          price: price,
          quantity: quantity,
          img: img
      };
  
      let updatedCart = cartContents;
      updatedCart.push(newCartItem);
  
      setCartContents(updatedCart);
    }
  }

  return (
    <ThemeProvider theme={lightTheme}>
      <>
          <GlobalStyles />
            
            <Header cartContents={cartContents} />

            <Product addToCart={addToCart} />
            
      </>
    </ThemeProvider>
  );
}

export default App;

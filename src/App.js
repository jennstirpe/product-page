import { useState, useEffect } from "react";

// DELETE AFTER TESTING
import testImg from  "./images/image-product-3-thumbnail.jpg";

import { ThemeProvider } from "styled-components";
import { lightTheme } from "./themes";

import GlobalStyles from "./components/styled/Global";
import Header from "./components/Header";
import Product from "./components/Product";


const LOCAL_STORAGE_KEY = "ecommerceSite.cart";

function App() {
  // const [ cartContents, setCartContents ] = useState([ 
  //   {
  //     id: "testId",
  //     name: "testName",
  //     price: 100,
  //     quantity: 2,
  //     img: testImg
  //   },
  //   {
  //     id: "testId2",
  //     name: "testName2 test testName testNaming",
  //     price: 150,
  //     quantity: 1,
  //     img: testImg
  //   }  
  // ]);

  const [ cartContents, setCartContents ] = useState(JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) ?? []);
  const [ itemCount, setItemCount ] = useState(0);

  useEffect(() => {
    if(cartContents.length !== 0) {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(cartContents));
    }
    getItemCount();
  }, [cartContents])

  function getItemCount() {
    let itemQuantities = [];
    let sum = 0;

    cartContents.map(item => {
      itemQuantities.push(item.quantity)
    })
    
    for (let i = 0; i < itemQuantities.length; i++) {
      sum += itemQuantities[i]
    }

    setItemCount(sum)
  } 


  function addToCart(name, price, quantity, img) {
    // check if item already in cart, if so, update amount
    const existingCartItem = cartContents.find(item => item.id == name);

    if(existingCartItem) {
      const updatedCart = cartContents.map(item => {
        if (item.name == name) {
          const newQuantity = item.quantity + quantity;
          return {...item, quantity: newQuantity}
        } else {
          return item;
        }
      })
      setCartContents(updatedCart);
    } else { // if item not already in cart, add as new item
      setCartContents([...cartContents, { id: name, name: name, price: price, quantity: quantity, img: img }]);
    }
  }


  return (
    <ThemeProvider theme={lightTheme}>
      <>
          <GlobalStyles />
            
            <Header cartContents={cartContents} itemCount={itemCount} />

            <Product addToCart={addToCart} />
            
      </>
    </ThemeProvider>
  );
}

export default App;

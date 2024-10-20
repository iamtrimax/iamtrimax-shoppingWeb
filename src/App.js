import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header";
import {Router} from"@reach/router";
import {useThemeHook} from "./GlobalComponents/ThemeProvider";

//pages
import Home from'./Pages/Home';
import Cart from'./Pages/Cart';
import ProductDetails from "./Pages/ProductDetails";
import SignIn from "./Pages/SignIn";
import Register from "./Pages/Register";
import MyAccount from "./Pages/MyAccount";
function App() {
  const [theme] = useThemeHook();
  return (
    <main className={theme? "bg-black" : "bg-light-2"}style={{height:"100vh", overflowY:"auto"}}>
      <Header/>
      <Router> 
        <Home path = "/" />
        <Cart path = "/cart"/> 
        <ProductDetails path="product-details/:productId"/>
        <SignIn path="/sign-in"/>
        <Register path= "/register"/>
        <MyAccount path="/my-account"/>
      </Router> 
    
    </main>
  );
}

export default App;

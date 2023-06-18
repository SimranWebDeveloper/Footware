import React from 'react'
import AppRouter from './router/AppRouter'
import { CartProvider } from 'react-use-cart'
import { ThemeProvider } from './components/context/ThemeContext'
import { WishlistProvider } from 'react-use-wishlist'





const App = () => {
  return (
    <>
    <WishlistProvider>
      <ThemeProvider>    {/*  -- Dark Mode provider  */} 
        <CartProvider>
            <AppRouter/>
        </CartProvider>
      </ThemeProvider>  
    </WishlistProvider>
     
      
    </>


  )
}

export default App



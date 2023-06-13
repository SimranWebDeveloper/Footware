import React from 'react'
import AppRouter from './router/AppRouter'
import { CartProvider } from 'react-use-cart'
import { ThemeProvider } from './components/context/ThemeContext'



const App = () => {
  return (
    <>
        <ThemeProvider>    {/*  -- Dark Mode provider  */} 
            <CartProvider>
              <AppRouter/>
            </CartProvider>
          </ThemeProvider>       
      
    </>
  )
}

export default App



import {React,useContext,useState} from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import Header from '../common/Header'
import Footer from '../common/Footer'
import Header2 from '../common/Header2'
import Menu from '../common/Menu'
import Advertising from "../common/Advertising";
import Home from '../components/pages/Home'
import Men from '../components/pages/Men'
import Women from '../components/pages/Women'
import About from '../components/pages/About'
import Contact from '../components/pages/Contact'
import { ContextProvider } from "../components/context/GlobalState";
import Scroll from '../common/scroll'
import AddToCard from "../components/pages/AddToCard";
import { ToastContainer} from 'react-toastify';
import { GlobalThemeContext } from "../components/context/ThemeContext";
import DetailPages from "../components/pages/DetailPages";
import WishList from "../components/pages/Wishlist";




const AppRouter = () => {
  const[isOpen,setIsOpen]=useState(false)

  const{darkMode}=useContext(GlobalThemeContext)

  return (


    <main className={darkMode ? 'dark' : 'light'}>


      <ContextProvider>     {/*  -- Add to Card provider  */} 
            <BrowserRouter >
              <ToastContainer
                  position="top-right"
                  autoClose={5000}
                  hideProgressBar={false}
                  newestOnTop={false}
                  closeOnClick
                  rtl={false}
                  pauseOnFocusLoss
                  draggable
                  pauseOnHover={false}
                  theme="light"
                  />
                <ToastContainer />
          <Header2 isOpen={isOpen} setIsOpen={setIsOpen}/>
          <Menu isOpen={isOpen} setIsOpen={setIsOpen}></Menu>
          <Advertising />
          <Routes>
              <Route path="/" element={<Home/>} />
              <Route  path="/men" element={<Men/>}/>
              <Route  path="/women" element={<Women/>}/>
              <Route  path="/about" element={<About/>}/>
              <Route  path="/contact" element={<Contact/>}/>
              <Route  path="/tocard" element={<AddToCard/>}/>
              <Route path="/product/:id" element={<DetailPages/>}/>
              <Route path="/wishlist" element={<WishList/>} />
              
          </Routes>
          <Footer/>
          <Scroll />
        </BrowserRouter>
      </ContextProvider>
    </main>
  )
}

export default AppRouter

import {React,useContext,useEffect,useState} from "react";
import { Container } from "react-bootstrap";
import { GiHamburgerMenu, GiCircleForest } from "react-icons/gi";
import { FiSun,FiMoon } from 'react-icons/fi';

import { NavLink } from "react-router-dom";
import { useCart } from "react-use-cart";
import { GlobalThemeContext } from "../components/context/ThemeContext";
import { useTranslation } from "react-i18next";
import i18n from "../i18n/i18n";
import { useWishlist } from "react-use-wishlist";



function Header2({isOpen,setIsOpen}) {
  const{totalItems}=useCart()
  useEffect(()=>{

  },[totalItems])
  const{darkMode,setDarkMode,toggleTheme}=useContext(GlobalThemeContext)

  const { t }=useTranslation()

  const{totalWishlistItems}=useWishlist()

  const handleClick = (lang) => {
    i18n.changeLanguage(lang)
  }




  return (
    <section className="header-section pt-2">
      <Container>
        <div className="d-flex justify-content-between ">
          {/* Footwear and Menu btn */}
          <div className="d-flex align-items-center justify-content-between">
            <h1 className="text-secondary d-flex  text-shadow" style={{"text-shadow": "2px 1px 2px #000"}}>
                <img className="me-2" src="https://redshoesrock.com/wp-content/uploads/2018/05/red-shoes-high-tops.png?w=60" alt=""  />
              Footwear</h1>
          </div>

          {/* Search */}
          <div className="d-lg-flex jus d-none w-100 justify-content-end ">
            <form className=" d-flex justify-content-between align-items-center rounded-pill border" style={{height:"fit-content"}}>
              <input
                type="text"
                className="form-control rounded-start-pill border-0 me-2"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
              <button
                type="submit"
                className="searchIcon  border-0 rounded-circle py-2 px-3"
              >
                <i className="fa-solid fa-magnifying-glass text-light"></i>
              </button>
            </form>
          </div>

          <h5 style={{cursor:'pointer'}}  onClick={()=>setIsOpen(!isOpen)}><GiHamburgerMenu className="d-flex d-lg-none fs-1 cursor-pointer mt-1" /></h5>

        </div>
        {/* Menu */}
        <div id="myMenu" className=" d-flex  justify-content-between  mt-4 ">

          <div className="d-flex justify-content-between fs-6 text-nowrap w-100 ">
            <ul className="d-none d-lg-flex justify-content-between  list-unstyled " id='ulnav'>
              <li  className="me-4 content-shadow" style={{textShadow:"1px 1px 1px #000"}}> <NavLink   className={({ isActive }) =>  isActive ? "border-bottom border-danger border-3 nav-link" : "nav-link"  }  to='/'>{t("header.0")}</NavLink></li>
              <li  className="me-4 text-shadow" style={{textShadow:"1px 1px 1px #000"}}> <NavLink className={({ isActive }) =>  isActive ? "border-bottom border-danger border-3 nav-link" : "nav-link"  } to='/men'>{t("header.1")}</NavLink></li>
              <li  className="me-4 text-shadow" style={{textShadow:"1px 1px 1px #000"}}><NavLink  className={({ isActive }) =>  isActive ? "border-bottom border-danger border-3 nav-link" : "nav-link"  } to='/women'>{t("header.2")}</NavLink></li>
              <li  className="me-4 text-shadow" style={{textShadow:"1px 1px 1px #000"}}><NavLink  className={({ isActive }) =>  isActive ? "border-bottom border-danger border-3 nav-link" : "nav-link"  } to='/about'>{t("header.3")}</NavLink></li>
              <li  className="me-4 text-shadow" style={{textShadow:"1px 1px 1px #000"}}><NavLink  className={({ isActive }) =>  isActive ? "border-bottom border-danger border-3 nav-link" : "nav-link"  } to='/contact'>{t("header.4")}</NavLink></li>
            </ul>
            
             <ul className="d-none d-lg-flex  justify-content-between list-unstyled ">
              <li className="me-4" style={{textShadow:"1px 1px 1px #000"}}><NavLink className={({ isActive }) =>  isActive ? "border-bottom border-danger border-3 nav-link" : "nav-link"  } to='/tocard'>
                {t("header.5")}
                {totalItems !=0 ?  <sup  className="bg-success px-1 rounded ms-1 text-light" >{totalItems}</sup>: null} 
                </NavLink>
              </li>
              
              <li className="me-4 " style={{textShadow:"1px 1px 1px #000"}} ><NavLink className={({ isActive }) =>  isActive ? "border-bottom border-danger border-3 nav-link" : "nav-link"  } to='/wishlist'>
                {t("header.7")}
                <span><sup className="bg-success text-white p-1 rounded ms-1">{totalWishlistItems}</sup></span>
                </NavLink></li>
              
                {/* dark Mode */}
                <li className="me-4" >
                    {
                      JSON.parse(darkMode) ? 
                        <button id="cardBtn" className="btn text-light "  onClick={toggleTheme}><FiSun className="fs-4 text-warning"/>  </button>
                      : 
                        <button id="cardBtn" className="btn text-dark"  onClick={toggleTheme}><FiMoon className="fs-4 text-black"/>  </button> 
                    }
                </li>
                {/* languages */}
                <li>
                  <div className="dropdown">
                  <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  {t("header.6")}
                  </button>
                    <ul className="dropdown-menu">
                      <li style={{width:'50px'}}><button id="cardBtn" className="btn " onClick={()=>handleClick('az')}>Az</button></li>
                      <li style={{width:'50px'}}> <button id="cardBtn" className="btn " onClick={()=>handleClick('en')}>En</button></li>

                    </ul>
                  </div>
                </li>

             </ul>
          </div>


        </div>
      </Container>
    </section>
  );
}

export default Header2;

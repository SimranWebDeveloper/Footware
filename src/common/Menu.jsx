import React, { useContext, useEffect, useState } from "react";
import { ImCancelCircle } from "react-icons/im";

import { useTranslation } from "react-i18next";
import { useCart } from "react-use-cart";
import { useWishlist } from "react-use-wishlist";
import i18n from "../i18n/i18n";
import { GlobalThemeContext } from "../components/context/ThemeContext";
import { FiSun,FiMoon } from 'react-icons/fi';
import { NavLink } from "react-router-dom";

const Menu = ({ isOpen,setIsOpen }) => {

    const{darkMode,setDarkMode,toggleTheme}=useContext(GlobalThemeContext)
  
const {t}=useTranslation()

  const{totalItems}=useCart()
  useEffect(()=>{

  },[totalItems])

  const{totalWishlistItems}=useWishlist()

  const handleClick = (lang) => {
    i18n.changeLanguage(lang)
  }

  return (
    <div className={isOpen ? "hide-menu fixed-top " : "menu"}>
      <div className="position-relative">
          <h1 className="fs-3 bg-success">
          <img className="me-2" src="https://redshoesrock.com/wp-content/uploads/2018/05/red-shoes-high-tops.png?w=60" alt=""  />
          Footware
          </h1>
       
        <ul className="p-5 list-unstyled fs-6 lh-lg">
          <li > <NavLink  className={({ isActive }) =>  isActive ? "border-bottom border-danger border-3 nav-link" : "nav-link"  } to='/'>{t("header.0")}</NavLink></li>
          <li > <NavLink  className={({ isActive }) =>  isActive ? "border-bottom border-danger border-3 nav-link" : "nav-link"  } to='/men'>{t("header.1")}</NavLink></li>
          <li ><NavLink   className={({ isActive }) =>  isActive ? "border-bottom border-danger border-3 nav-link" : "nav-link"  } to='/women'>{t("header.2")}</NavLink></li>
          <li ><NavLink   className={({ isActive }) =>  isActive ? "border-bottom border-danger border-3 nav-link" : "nav-link"  } to='/about'>{t("header.3")}</NavLink></li>
          <li ><NavLink   className={({ isActive }) =>  isActive ? "border-bottom border-danger border-3 nav-link" : "nav-link"  } to='/contact'>{t("header.4")}</NavLink></li>

          <li className="me-4" style={{textShadow:"1px 1px 1px #000"}}><NavLink className={({ isActive }) =>  isActive ? "border-bottom border-danger border-3 nav-link" : "nav-link"  } to='/tocard'>
            {t("header.5")}
            {totalItems !=0 ?  <sup  className="bg-success px-1 rounded  text-light ms-1" >{totalItems}</sup>: null} 
            </NavLink>
          </li>
          
          <li className="me-4 " style={{textShadow:"1px 1px 1px #000"}} ><NavLink className={({ isActive }) =>  isActive ? "border-bottom border-danger border-3 nav-link" : "nav-link"  } to='/wishlist'>
            {t("header.7")}
            <span><sup className="bg-success text-white p-1 rounded ms-1">{totalWishlistItems}</sup></span>
            </NavLink>
          </li>

            {/* dark Mode */}
            <li className="me-4" style={{border:"none"}}>
                {
                  JSON.parse(darkMode) ? 
                    <button id="cardBtn" className="btn text-light "  onClick={toggleTheme}><FiSun className="fs-4 text-warning"/>  </button>
                  : 
                    <button id="cardBtn" className="btn text-dark"  onClick={toggleTheme}><FiMoon className="fs-4 text-warning"/>  </button> 
                }
            </li>
            {/* languages */}
            <li style={{border:"none"}}>
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
        <button className="btn position-absolute text-danger  fs-5 top-0 end-0 " onClick={()=>setIsOpen(!isOpen)}><ImCancelCircle /></button>
      </div>
    </div>
// 







  );
};

export default Menu;

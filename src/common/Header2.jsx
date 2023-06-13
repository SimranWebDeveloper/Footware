import {React,useContext,useEffect,useState} from "react";
import { Container } from "react-bootstrap";
import { GiHamburgerMenu, GiCircleForest } from "react-icons/gi";
import { FiSun,FiMoon } from 'react-icons/fi';

import { NavLink } from "react-router-dom";
import { useCart } from "react-use-cart";
import { GlobalThemeContext } from "../components/context/ThemeContext";
import { useTranslation } from "react-i18next";
import i18n from "../i18n/i18n";



function Header2({isOpen,setIsOpen}) {
  const{totalItems}=useCart()
  const{darkMode,setDarkMode,toggleTheme}=useContext(GlobalThemeContext)

  const { t }=useTranslation()
  const handleClick = (lang) => {
    i18n.changeLanguage(lang)
  }




  return (
    <section className="header-section">
      <Container>
        <div className="d-sm-flex justify-content-between ">
          {/* Footwear and Menu btn */}
          <div className="d-flex align-items-center justify-content-between">
            <h1 className="text-secondary">Footwear</h1>
            <h3  onClick={()=>setIsOpen(!isOpen)}><GiHamburgerMenu className="d-flex d-sm-none" /></h3>
            
          </div>

          {/* Search */}
          <div>
            <form className="d-flex justify-content-between align-items-center rounded-pill border">
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
        </div>
        {/* Menu */}
        <div id="myMenu" className=" d-flex  justify-content-between  mt-4 ">

            <ul className="d-flex justify-content-center list-unstyled fs-6" id='ulnav'>
            <li  className="me-4"> <NavLink className="nav-link" to='/'>{t("header.0")}</NavLink></li>
            <li  className="me-4"> <NavLink className="nav-link" to='/men'>{t("header.1")}</NavLink></li>
              <li className="me-4" ><NavLink className="nav-link" to='/women'>{t("header.2")}</NavLink></li>
              <li className="me-4" ><NavLink className="nav-link" to='/about'>{t("header.3")}</NavLink></li>
              <li className="me-4" ><NavLink className="nav-link" to='/contact'>{t("header.4")}</NavLink></li>

              <li className="me-4" ><NavLink className="nav-link" to='/tocard'>
                {t("header.5")}
                {totalItems !=0 ?  <sup  className="bg-success px-1 rounded  text-light" >{totalItems}</sup>: null} 
                </NavLink></li>
                {/* Fark Mode */}
                <li className="me-4" >
                    {
                      JSON.parse(darkMode) ? 
                        <button id="cardBtn" className="btn text-light "  onClick={toggleTheme}><FiMoon className="fs-4 text-black"/>  </button>
                      : 
                        <button id="cardBtn" className="btn text-dark"  onClick={toggleTheme}><FiSun className="fs-4 text-warning"/>  </button> 
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
      </Container>
    </section>
  );
}

export default Header2;

import React, { useEffect, useState } from "react";
import { ImCancelCircle } from "react-icons/im";
import { NavLink } from "react-bootstrap";
import { useTranslation } from "react-i18next";

const Menu = ({ isOpen,setIsOpen }) => {
const {t}=useTranslation()

  return (
    <div className={isOpen ? "hide-menu fixed-top" : "menu "}>
      <div className="position-relative">
        <ul className="p-5 list-unstyled fs-6 lh-lg">
          <li > <NavLink className="nav-link" to='/'>{t("header.0")}</NavLink></li>
          <li > <NavLink className="nav-link" to='/men'>{t("header.1")}</NavLink></li>
          <li ><NavLink className="nav-link" to='/women'>{t("header.2")}</NavLink></li>
          <li ><NavLink className="nav-link" to='/about'>{t("header.3")}</NavLink></li>
          <li ><NavLink className="nav-link" to='/contact'>{t("header.4")}</NavLink></li>


        </ul>
        <button className="btn position-absolute text-white top-0 end-0 " onClick={()=>setIsOpen(!isOpen)}><ImCancelCircle /></button>
      </div>
    </div>
// 







  );
};

export default Menu;

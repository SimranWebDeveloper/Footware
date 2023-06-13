import React from "react";
import "../assets/sass/style.scss";
import { NavLink } from "react-bootstrap";
import { BsTwitter } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import { BsDribbble } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container pt-5">
        <div className="row text-secondary">
          <div className="col-lg-1"></div>
          <div className="col">
            <p className="fw-semibold text-black">ABOUT FOOTWEAR</p>
            <p>
              Even the all-powerful Pointing has no control about the blind
              texts it is an almost unorthographic life
            </p>
            <ul className="d-flex list-unstyled justify-content-evenly fs-5">
              <li>
                <NavLink><BsTwitter /></NavLink>
              </li>
              <li>
                <NavLink><FaFacebookF /></NavLink>
              </li>
              <li>
                <NavLink><BsLinkedin /></NavLink>
              </li>
              <li>
                <NavLink><BsDribbble /></NavLink>
              </li>
            </ul>
          </div>
          <div className="col">
              <p className="fw-semibold text-black">CUSTOMER CARE</p>
              <ul className=" list-unstyled lh-lg fs-6">
                <li><NavLink>CONTACT</NavLink>
                </li>
                <li>
                  <NavLink>RETURNS/EXCHANGE</NavLink>
                </li>
                <li>
                  <NavLink>GIFT VOUCHER</NavLink>
                </li>
                <li>
                  <NavLink>WISHLIST</NavLink>
                </li>
              </ul>
          </div>
          <div className="col">
              <p className="fw-semibold text-black">INFORMATION</p>
              <ul className=" list-unstyled lh-lg fs-6">
                <li><NavLink>CONTACT</NavLink>
                </li>
                <li>
                  <NavLink>RETURNS/EXCHANGE</NavLink>
                </li>
                <li>
                  <NavLink>GIFT VOUCHER</NavLink>
                </li>
                <li>
                  <NavLink>WISHLIST</NavLink>
                </li>
              </ul>
          </div>
          <div className="col">
              <p className="fw-semibold text-black">NEWS</p>
              <ul className=" list-unstyled lh-lg fs-6">
                <li><NavLink>CONTACT</NavLink>
                </li>
                <li>
                  <NavLink>RETURNS/EXCHANGE</NavLink>
                </li>
                <li>
                  <NavLink>GIFT VOUCHER</NavLink>
                </li>
                <li>
                  <NavLink>WISHLIST</NavLink>
                </li>
              </ul>
          </div>
          <div className="col">
              <p className="fw-semibold text-black">CONTACT INFORMATION</p>
              <ul className=" list-unstyled lh-lg fs-6">
                <li><NavLink>CONTACT</NavLink>
                </li>
                <li>
                  <NavLink>RETURNS/EXCHANGE</NavLink>
                </li>
                <li>
                  <NavLink>GIFT VOUCHER</NavLink>
                </li>
                <li>
                  <NavLink>WISHLIST</NavLink>
                </li>
              </ul>
          </div>
            <p className="text-center my-5">Copyright ©2023 All rights reserved | This template is made with  by Colorlib Demo Images: Unsplash , Pexels.com</p>
          <div className="col-lg-1"></div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;

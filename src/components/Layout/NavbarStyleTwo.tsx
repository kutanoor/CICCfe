"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import DarkAndLightMode from "./DarkAndLightMode";

import Image from "next/image";

import blackLogo from "/public/images/logo.svg";
import whiteLogo from "/public/images/logo2.svg";
import menuImg1 from "/public/images/menu/menu-1.jpg";
import menuImg2 from "/public/images/menu/menu-2.jpg";
import menuImg3 from "/public/images/menu/menu-3.jpg";
import menuImg4 from "/public/images/menu/menu-4.jpg";
import menuImg5 from "/public/images/menu/menu-5.jpg";
import { CustomButton } from "../CustomButton/CustomButton";

// import { ConnectButton } from '@rainbow-me/rainbowkit';

const NavbarTwo: React.FC = () => {
  // Toggle active class
  const [isActive, setActive] = useState<boolean>(false);
  const handleToggleSearchModal = () => {
    setActive(!isActive);
  };

  const currentRoute = usePathname();

  const [menu, setMenu] = useState<boolean>(true);

  const toggleNavbar = () => {
    setMenu(!menu);
  };

  useEffect(() => {
    let elementId = document.getElementById("navbar");
    document.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        elementId?.classList.add("sticky");
      } else {
        elementId?.classList.remove("sticky");
      }
    });
  }, []);

  const classOne: string = menu
    ? "collapse navbar-collapse mean-menu"
    : "collapse navbar-collapse show";
  const classTwo: string = menu
    ? "navbar-toggler navbar-toggler-right collapsed"
    : "navbar-toggler navbar-toggler-right";

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-color-f3f4f6" id="navbar">
        <div className="container-fluid mw-1640">
          <Link className="navbar-brand" href="/">
            <Image
              src={blackLogo}
              className="main-logo"
              style={{ width: "96", height: "auto" }}
              alt="Black logo"
            />
            <Image
              src={whiteLogo}
              style={{ width: "96", height: "auto" }}
              className="white-logo d-none"
              alt="White logo"
            />
          </Link>

          {/* Toggle navigation */}
          <button
            onClick={toggleNavbar}
            className={classTwo}
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="icon-bar top-bar"></span>
            <span className="icon-bar middle-bar"></span>
            <span className="icon-bar bottom-bar"></span>
          </button>

          <div className={classOne} id="navbarSupportedContent">
            <ul className="navbar-nav me-auto ms-70">
              <li className="nav-item dropdown">
                <Link className="nav-link " href="/">
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link " href="/stay/">
                  Investment Pools
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link " href="/add-listing/">
                  Create Pool
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link " href="/authentication/">
                  Login/Register
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link " href="/account/">
                  Account
                </Link>
              </li>
            </ul>
          </div>

          {/* others-options */}
          <div className="others-options">
            <ul className="d-flex align-items-center">
              <li>
                {/* <button
                  className="search-icon border-0 bg-transparent p-0"
                  
                >
                  <i className="flaticon-loupe"></i>
                </button> */}
              </li>
              <li>
                <div className=" active d-none d-lg-block">
                  <CustomButton />
                </div>
              </li>
              <li></li>
              <li>
                {/* DarkAndLightMode */}
                <DarkAndLightMode />
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Search Form */}
      <div
        className={`offcanvas offcanvas-top src-form-wrapper ${
          isActive ? "show" : ""
        }`}
      >
        <div className="container">
          <div className="offcanvas-body small">
            <form className="src-form">
              <input
                type="text"
                className="form-control"
                placeholder="Search Here..."
              />
              <button type="submit" className="src-btn">
                <i className="ri-search-line"></i>
              </button>
            </form>
          </div>
        </div>

        <button
          type="button"
          className="btn-close"
          onClick={handleToggleSearchModal}
        >
          <i className="ri-close-line"></i>
        </button>
      </div>
    </>
  );
};

export default NavbarTwo;

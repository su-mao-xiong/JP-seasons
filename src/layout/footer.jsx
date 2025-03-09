import React from "react";
import { routes } from "../helpers/routes";
import { NavLink } from "react-router";

function footer() {
  return (
    <>
      <footer className="footer navbar-expand-lg ">
        <div className="container-xxl py-120">
          <div className="d-flex align-items-center gap-11">
            <a href="./index.html">
              <picture>
                <source
                  media="(max-width: 991px)"
                  srcSet="/JP-seasons/images/logo-small.png"
                />
                <img src="/JP-seasons/images/logo.png" alt="A responsive image" />
              </picture>
            </a>
            <ul className="nav d-flex gap-3">
              {routes.map((route) => (
                <li className="nav-item" key={route.path}>
                  <NavLink 
                    className="nav-link fs-6 py-3 px-6 text-black"
                    to={route.path}
                  >
                    {route.name}
                  </NavLink>
                </li>
              ))}
            </ul>
            <div className="social-media-group d-flex gap-3">
              <div className="social-media fs-4">
                <i className="bi bi-facebook"></i>
              </div>
              <div className="social-media fs-4">
                <i className="bi bi-instagram"></i>
              </div>
              <div className="social-media fs-4">
                <i className="bi bi-linkedin"></i>
              </div>
              <div className="social-media fs-4">
                <i className="bi bi-twitter"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-black py-4">
          <p className="text-center fs-7 text-white mb-0">
            Copyright 2024 日本四季物語 All Rights Reserved.
          </p>
          <p className="text-center fs-7 text-white mb-0">
            僅供學習使用,無商業用途。
          </p>
        </div>
      </footer>
    </>
  );
}

export default footer;

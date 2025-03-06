import React from "react";
import { NavLink } from "react-router";
import { routes } from "../helpers/routes";

function header() {
  return (
    <>
      <header className="navbar navbar-expand-lg bg-background fixed-top py-3">
        <div className="container-xxl">
          <a className="navbar-brand p-0" href="/">
            <picture>
              <source
                media="(max-width: 991px)"
                srcSet="/images/logo-small.png"
              />
              <img src="/images/logo.png" alt="A responsive image" />
            </picture>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="offcanvas offcanvas-end p-0"
            tabIndex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header">
              <button
                type="button"
                className="btn-close btn-close-dark ms-auto p-7"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-header justify-content-center">
              <a className="navbar-brand p-0" href="/">
                <picture>
                  <source
                    media="(max-width: 991px)"
                    srcSet="/images/logo-small.png"
                  />
                  <img src="/images/logo.png" alt="A responsive image" />
                </picture>
              </a>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav mx-auto mb-0 d-flex align-items-center gap-3">
                {routes.map((route) => (
                  <li className="nav-item" key={route.path}>
                    <NavLink
                      className="nav-link px-6 py-3"
                      aria-current="page"
                      to={route.path}
                    >
                      {route.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
              <div className="user-status btn d-flex gap-3 p-0">
                <div className="logged-out">
                  <button
                    type="button"
                    className="btn btn-outline-primary rounded-5 px-6 py-3 text-primary sign-up"
                  >
                    註冊
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary rounded-5 px-6 py-3 text-white log-in"
                  >
                    登入
                  </button>
                </div>
                <div className="logged-in">
                  <button
                    type="button"
                    className="btn px-3 py-7 text-black fs-5"
                  >
                    <i className="bi bi-suit-heart-fill"></i>
                  </button>
                  <button
                    type="button"
                    className="btn px-3 py-7 text-black fs-5"
                  >
                    <i className="bi bi-person-fill"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default header;

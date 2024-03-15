import React from "react";
import logo from "./../images/roomquest logo.png";
import carousel1 from "./../images/ROOMQUEST (8).png";
import carousel2 from "./../images/ROOMQUEST (5).png";

function Navbar() {
  return (
    <>
      {/* navbar */}
      <nav class="navbar navbar-expand-lg bg-body-tertiary ">
        <div class="container-fluid">
          <img src={logo} className="logo-size" />
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  About Us
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link form-link position-absolute top-1 end-0 bg-dark text-light btn login">
                  Login
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* navbar end */}

      {/* carousel */}
      <div
        id="carouselExampleFade"
        class="carousel slide carousel-fade"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={carousel1} className="carousel-size" />
          </div>
          <div class="carousel-item">
            <img src={carousel2} className="carousel-size" />
          </div>
          <div class="carousel-item">
            <img src={carousel1} className="carousel-size" />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}

export default Navbar;

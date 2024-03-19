import React from "react";
import logo from "./../images/roomquest logo.png";
import { Link } from "react-router-dom";
import carousel1 from "./../images/ROOMQUEST (8).png";
import carousel2 from "./../images/ROOMQUEST (5).png";
import carousel3 from "./../images/ROOMQUEST (6).png";

function Navbar() {
  return (
    <>
      <nav className=" bg-stone-300 flex justify-between px-3 rounded-md h-18">
        <div>
          <img src={logo} className="h-14 w-32" />
        </div>
        <ul className="md:flex hidden font-semibold mt-3">
          <li className="mx-[10px] cursor-pointer ">Home</li>
          <li className="mx-[10px] cursor-pointer">About US</li>
        </ul>
        <div className="items-center flex">
          <button className="hidden md:block bg-zinc-800 text-white rounded-md p-2 w-full mx-2 font-bold">
          <Link to="./../views/Login">Login</Link>
          </button>
          <button className="hidden md:block bg-zinc-800 text-white rounded-md p-2 w-full font-bold">
            Registration
          </button>
        </div>
      </nav>
      <div>
        <div
          id="carouselExampleFade"
          class="carousel slide carousel-fade"
          data-bs-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src={carousel1} class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src={carousel2} class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src={carousel3} class="d-block w-100" alt="..." />
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
      </div>
    </>
  );
}

export default Navbar;

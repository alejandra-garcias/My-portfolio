"use client";
import React, { useState, useEffect } from "react";
import "./Nav.scss";
import Link from "next/link";

export default function nav() {
  const [ScrollY, setScrollY] = useState(0);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);
  const handleScroll = () => {
    let position = window.scrollY;
    setScrollY(position);
    //console.log(position)

  };
 
  
  

  return (
    <>
      <div className="nav-bar-container">
       
        <li>
          <Link className={ScrollY < 560 ? "active" : null} href="/">
            Home
          </Link>
        </li>
        <li>
          <Link
            className={ScrollY >= 560 && ScrollY <= 1700 ? "active" : null}
            href="/#projects"
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            className={ScrollY >= 1360 && ScrollY <= 1906 ? "active" : null}
            href="/#certificates"
          >
            Certificates
          </Link>
        </li>
        <li>
          <Link
            className={ScrollY >= 1906 && ScrollY <= 2700 ? "active" : null}
            href="/#contact"
          >
            Contact
          </Link>
        </li>
      </div>
    </>
  );
}

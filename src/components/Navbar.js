import React from "react";
// import { Link, useLocation } from "react-router-dom";

function Navbar() {
  // const location = useLocation();

  return (
    // <ul className="nav nav-tabs">
    //   <li className="nav-item">
    //     <Link
    //       to="/portfolio"
    //       className={location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}
    //     >
    //       About
    //     </Link>
    //   </li>
    //   <li className="nav-item">
    //     <Link
    //       to="/projects"
    //       className={location.pathname === "/projects" ? "nav-link active" : "nav-link"}
    //     >
    //       Projects
    //     </Link>
    //   </li>
    //   <li className="nav-item">
    //     <Link
    //       to="/contact"
    //       className={location.pathname === "/contact" ? "nav-link active" : "nav-link"}
    //     >
    //       Contact
    //     </Link>
    //   </li>
    // </ul>

      <nav className="navbar navbar-expand-lg navbar-dark"> 
        <a className="navbar-brand" href="/">Mary Cohan</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <a className="nav-link text-light" href="/Portfolio"> Portfolio </a>
          <a className="nav-link text-light" href="/Contact"> Contact </a>
          <a className="nav-link active text-light" href="/">About </a>
        </button>
        {/* <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-link" href="/Contact"> Contact</a>
            <a className="nav-link" href="/Portfolio">Portfolio</a>
            <a className="nav-link active" href="/About">About<span className="sr-only">(current)</span></a>
          </div>
        </div> */}
      </nav>
    );

}

export default Navbar;


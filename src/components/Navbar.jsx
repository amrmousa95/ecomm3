import React, { useContext } from "react";
import { BsCartDash } from "react-icons/bs";
import { Button } from "react-bootstrap";
import logo from '../assets/logo5.png'
import { Link } from "react-router-dom";
import { ProductsContext } from "../context/ProductsContext";
function Navbar() {
  const {handleShow, getAllQuantity} = useContext(ProductsContext)
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
      <div className="container">
        <a className="navbar-brand" href="#/">
          <img src={logo} alt="logo" width="125px" style={{objectFit:"contain"}} className="d-inline-block align-middle"/>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 d-flex align-items-center">
            <li className="nav-item">
              <Link className="nav-link" to="/product">
                Products
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#/">
                About us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#/">
                Contact us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="#/">
                <Button variant="outline-primary" onClick={handleShow} className="rounded-circle" style={{
                    width: "3rem",
                    height: "3rem",
                    position: "relative",
                  }}>
                    <BsCartDash size={22} />
                    <span style={{
                      position:"absolute",
                      width:"25px",
                      height:"25px",
                      borderRadius:"50%",
                      backgroundColor:"red",
                      color:"white",
                      bottom:"-10px",
                      right:"-10px",
                      display:"flex",
                      justifyContent:"center",
                      alignItems:"center",
                      

                    }}>{getAllQuantity()}</span>
                </Button>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

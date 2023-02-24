import React from 'react'; 
 import "../style/Header.scss";
import {HashLink} from "react-router-hash-link";
function Header() {
  return ( 
    <>  
   <nav>
    <h1>Technology</h1>
    <div className="main">
    <HashLink to={"/#home"}>Home</HashLink>
    <HashLink to={"/contact"}>contact</HashLink>
    <HashLink to={"/#about"}>About</HashLink>
    <HashLink to={"/#brand"}>Brands</HashLink>
    <HashLink to={"/#footer"}>services</HashLink>
    </div>
   </nav>
   </>
  )
}

export default Header;
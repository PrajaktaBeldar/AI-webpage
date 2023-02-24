import React from 'react';
import "../style/Footer.scss"; 
const Footer = () => {
  return <>
  <footer id="footer">
    <div> 
        <h1>TechyStar</h1>
        <p>@all rights reserved</p>
    </div>

    <div>
        <h5>Follow us</h5>
        <div>
            <a href="http://youtube.com" target={"blank"}>Youtube</a>
            <a href="http://Instagram.com" target={"blank"}>Instagram</a>
            <a href="http://google.com" target={"blank"}>Google</a>
        </div>
    </div>
  </footer>
  </>
}

export default Footer;
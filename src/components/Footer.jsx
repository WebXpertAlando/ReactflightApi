import React from "react";
import fb from './images/fb.jpg';
import twitter from './images/twitter.jpg';
import linkedin from './images/linkedin.jpg';
import youtube from './images/youtube.jpg';
import insta from './images/insta.jpg';
import './Footer.css'


function Footer () {
    return (
        <div className="main-footer">
          

        <ul class="nav footer-nav">
             <li><a href="https://www.facebook.com/"><img src={fb} alt='fb'/></a></li>
                 <li><a href="https://www.instagram.com/"><img src={insta} alt='insta'/></a></li>
                 <li><a href="https://www.linkedin.com/"><img src={linkedin} alt='linkedin'/></a></li>
                 <li><a href="https://www.youtube.com/"><img src={youtube} alt='youtube'/></a></li>
                 <li> <a href="https://twitter.com/"><img src={twitter} alt='twitter'/></a></li>  
                
             </ul>

        <p>Powered By: WebXpert Solutions</p>
        <p>FLIGHT MIS. Copyright &copy; {new Date().getFullYear()}</p>
        </div>
    )
}
export default Footer;
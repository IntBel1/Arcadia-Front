import React from 'react'
import './Footer.css'
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  
  return (
    <div className='BotAnimal'>
        <div className='first'>
            <p>Most Visiting Links</p>
            <menu>
                <ul className="bot-links">
                
                <li><a href="/habitats">Habitats</a></li>
                <li><a href="/services">Services</a></li>
                </ul>
            </menu>
        </div>

        <div className='second'>
            <p>Site Information</p>
            <menu>
                <ul className="bot-links">
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms & Conditions</a></li>
                <li><a href="#">Cookie Information</a></li>
                </ul>
            </menu>
        </div>

        <div className='third'>
            <p>Follow Us</p>
            <menu>
                <ul className="bot-links">
                <li><a href="https://twitter.com/Zoolarcadia"><FaXTwitter size={30} className='logoBot'/><span>Twitter</span></a></li>
                <li><a href="https://www.facebook.com/Zoolarcadia"><FaFacebook size={30} className='logoBot'/><span>Facebook</span></a></li>
                <li><a href="https://www.youtube.com/@Zoolarcadia"><FaYoutube size={30} className='logoBot'/><span>Youtube</span></a></li>
                

                </ul>
            </menu>
        </div>
    </div>
  )
}

export default Footer
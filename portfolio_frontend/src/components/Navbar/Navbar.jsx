import React, { useState } from 'react';
import "./Navbar.scss";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";

import { images } from '../../constants';

export default function Navbar() {
const [toggle, setToggle] = useState(false);

  return (
    <div>
        <nav className="app__navbar">
            <div className="app__navbar-logo">
                <img src={images.logo} alt="logo" />
            </div>
            <ul className="app__navbar-links">
                {["home", "about", "work", "skills", "contact"].map((item) => (
                  <li key={`link-${item}`} className='app__flex p-text'>
                      <div />
                       <a href={`#${item}`}>{item}</a>
                  </li>
                ))}
            </ul>
            {/* nav menu */}
            <div className="app__navbar-menu">
                 <HiMenuAlt4 onClick={() => setToggle(true)}/>

                 {toggle && (
                   <motion.div
                      whileInView={{x: [300, 0]}}
                      transition={{ duration: 0.85, ease: 'easeInOut'}}
                   >
                      <HiX onClick={() => setToggle(false)}/>
                        {["home", "about", "work", "skills", "contact"].map((item) => (
                        <li key={item} className='app__flex p-text'>
                            <a href={`#${item}`} onClick={() => setToggle(false)}>{item}</a>
                        </li>
                      ))} 
                   </motion.div>
                 )}
            </div>
        </nav>
    </div>
  )
}

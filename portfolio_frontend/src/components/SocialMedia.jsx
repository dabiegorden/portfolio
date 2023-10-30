import React from 'react';
import { BsTwitter, BsInstagram } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

const SocialMedia = () => (
  <div className="app__social">
    <div style={{ cursor: "pointer"}}>
       <a href="https://twitter.com/DABIEGORDEN2">
        <BsTwitter />
       </a>
    </div>
    <div style={{ cursor: "pointer"}}>
        <a href="GATXUWWYDFFHN4SK64F6H3X6UVUCRGMR6BXJ4JAPT2MMG5QI5VRQLQNE">
        <FaFacebookF />
        </a>
    </div>
    <div style={{ cursor: "pointer"}}>
       <a href="GATXUWWYDFFHN4SK64F6H3X6UVUCRGMR6BXJ4JAPT2MMG5QI5VRQLQNE">
       <BsInstagram />
       </a>
    </div>
  </div>
);

export default SocialMedia;
import React from 'react';
import "./Header.css";
import Cards from './Cards';

function Header() {
  return (
      <>
    <div className="header_image">
    <div className="header_top">
    
     <h4 className="getApp">Get the app</h4>
     <div className="last_header">
         <h3 className="last_header_word">Add restaurant</h3>
         <h3 className="last_header_word">Log in</h3>
         <h3 className="last_header_word">Sign Up</h3>
     </div>
     </div>
     <div className="middle_header"> 
         <i className="zomato_header">zomato</i>
         <h1>Discover the best food & drinks in Delhi NCR</h1>
         <input className="input_header" type="text" placeholder="Search for restaurent, cuisine or a dish"></input>
     </div>
    </div>
   </>
    
  )
}

export default Header;

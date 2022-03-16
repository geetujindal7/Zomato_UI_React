import React from 'react';
import "./Header.css";


const card = [
    {
        img: "https://b.zmtcdn.com/webFrontend/64dffaa58ffa55a377cdf42b6a690e721585809275.png?fit=around|402:360&crop=402:360;*,*",
        title: "Order Food Online"
    },

    {
        img: "https://b.zmtcdn.com/webFrontend/95f005332f5b9e71b9406828b63335331585809309.png?fit=around|402:360&crop=402:360;*,*",
        title: "Go out for a meal"
    },

    {
        img: "https://b.zmtcdn.com/webFrontend/b256d0dd8a29f9e0623ecaaea910534d1585809352.png?fit=around|402:360&crop=402:360;*,*",
        title: "Zomato Pro"
    },

    {
        img: "https://b.zmtcdn.com/webFrontend/8ff4212b71b948ed5b6d2ce0d2bc99981594031410.png?fit=around|402:360&crop=402:360;*,*",
        title: "Nightlife & Clubs"
    },


]

function Cards() {
  return (
      <>
      <div className="card_body">
      {
       
          card.map((i) => 
          {
              return(
               
                <div>
      <div className="card_container">
      <img className="card_img" src={i.img} alt="a" />
      <h2 className="card_word" 
      style={{fontSize: "20px"}}>{i.title}</h2>
    </div>
    </div>
              )
          })
      }
      </div>
      
      
    </>
  )
}



export default Cards;


import React from 'react'
import "./Header.css"

function Mobile() {
  return (
    <div className="mobile" style={{width:"100%"}}>
      <div >
          <img className="mobile_img" src="https://b.zmtcdn.com/data/pro/5722d9e687511d79616bcab92470734e1596187147.png" alt="mobi"/>
      </div>
      <div style={{width:"45rem"}}>
          <h2 style={{marginTop:"50px", fontSize:"50px",  display:"flex"}}>Get the Zomato App</h2>
          <p className="tex">We will send you a link, open it on your phone to download the app</p>
    
         <div style={{display:"flex"}}>
          <input  type="radio" value="Email"/> Email
        <input type="radio" value="Phone" /> Phone
        </div>
          <div>
          
          <section style={{display:"flex"}}>
          <input className="email_chck" type="text"  placeholder="Email"/> 
          <button style={{height:"3rem", width:"100px", marginTop:"30px" , marginLeft:"10px", borderRadius:"0.6rem", background:"lightgrey", color:"white"}}>Share App Link</button>
          </section>
          </div>
          <div style={{display:"flex"}}>
          <p style={{color:"lightgrey"}}>Download app from</p>
          </div>
          <div style={{display:"flex"}}>
            <img style={{width:"150px", height:"40px"}} src="https://b.zmtcdn.com/data/webuikit/9f0c85a5e33adb783fa0aef667075f9e1556003622.png" alt="app"/>
            <img style={{width:"150px", height:"40px", marginLeft:"10px"}}  src="https://b.zmtcdn.com/data/webuikit/23e930757c3df49840c482a8638bf5c31556001144.png" alt="app"/>

          </div>
          <div>
          </div>
          </div>
  
    </div>
  )
}


export default Mobile


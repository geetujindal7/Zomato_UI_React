import React from 'react'

function Journey() {
    return (
        <div style={{borderRadius:"10px",marginLeft:"20%", marginTop:"100px", marginRight:"20%" ,backgroundImage:"url(https://www.zomato.com/partner-with-us/static/media/StartJourney.7cfaaf0a.jpg)", height:"245px", marginBottom:"100px"}}>
           {/* <img src="https://www.zomato.com/partner-with-us/static/media/StartJourney.7cfaaf0a.jpg" alt=""/>  */}
          
          <div style={{position:"absolute", width:"80%" }}>
          <div>
          <h1 style={{color:"white", marginLeft:"5%", marginTop:"40px", fontSize:"35px"}}>Start your journey with Zomato</h1>
<p style={{color:"white", marginLeft:"5%", marginTop:"40px", fontSize:"15px"}}>Create your restaurant page and register for online ordering</p>
<button className="registrr">Start now</button>

</div>
        </div></div> 
    )
}

export default Journey;

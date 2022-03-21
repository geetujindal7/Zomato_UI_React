import React from 'react'

function Already() {
    return (
        <div style={{width:"100%", backgroundColor:"#EFEFEF" , height:"300px"}}>
        <div style={{ marginLeft: "30%",
    display: "flex",
   flexWrap: "wrap",
    height: "250px"}}  >
            <div style={{fontSize:"40px", marginTop:"50px", fontWeight:"500"}}>Already have your restaurant listed?</div>
            <p style={{ marginLeft:"90px", color:"gray", fontSize:"20px"}}>Search here and claim the ownership of your restaurant</p>
            <input className="input_header" type="text" placeholder="Search for restaurent, cuisine or a dish"></input>
            </div>
        </div>
    )
}

export default Already

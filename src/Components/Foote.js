import React from 'react';




const plac = [
    {
        places: "Bakery food near me"
    },
    {
        places: "Beverages food near me"
    },
    {
        places: "Biryani food near me"
    },

    {
        places: "Burger food near me"
    },
    {
        places: "Chinese food near me"
    },
    {
        places: "Continental food near me"
    },


    {
        places: "Desserts food near me"
    },
    {
        places: "Ice Cream food near me"
    },

    {
        places: "Italian food near me"
    },
    {
        places: "Kebab food near me"
    },
    {
        places: "Mithai food near me"
    },

    {
        places: "Momos food near me"
    },
    {
        places: "Mughlai food near me"
    },
    {
        places: "North Indian food near me"
    },

    {
        places: "Pizza food near me"
    },
    {
        places: "Rolls food near me"
    },
    {
        places: "Sandwich food near me"
    },
    {
        places: "Shake food near me"
    },
    {
        places: "South Indian food near me"
    },
    {
        places: "Street food near me"
    },


]

function Footer() {
    return (
        <div style={{width:"100%"}}>
        <div>
            <h1 style={{marginTop:"80px", display:"flex", marginLeft:"150px"}}>Explore other options for you here</h1>
            <h2 style={{marginTop:"40px", display:"flex", marginLeft:"150px"}}>Popular cuisines near me</h2>
            </div>
            <div style={{display:"flex",  marginLeft:"150px", flexWrap:"wrap", flex:"1",marginTop:"30px"}}>
            {
                plac.map((i) => {
                    return(
                     <>  
            <p style={{ display:"flex" , color:"#959292"}}>{i.places}</p>
            <span style={{marginTop:"25px", marginLeft:"7px"}} className="dot"></span>
            </>
            
           
                    )
                })

           
            }
            </div>

<div style={{marginTop:"100px"}}>
<h2 style={{display:"flex", marginLeft:"150px"}}>Popular restaurant types near me</h2>

</div>

<div style={{display:"flex",  marginLeft:"150px", flexWrap:"wrap", flex:"1",marginTop:"20px"}}>
            {
                plac.map((i) => {
                    return(
                     <>  
            <p style={{ display:"flex" , color:"#959292"}}>{i.places}</p>
            <span style={{marginTop:"25px", marginLeft:"7px"}} className="dot"></span>
            </>
                    )
                })

           
            }
            </div>
            </div>
    )
}

export default Footer;

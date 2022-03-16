import React from 'react';




const cities = [
    {
        places: "Bikanervala"
    },
    {
        places: "Biryani Blues"
    },
    {
        places: "BTW"
    },

    {
        places: "Burger King"
    },
    {
        places: "Burger Singh"
    },
    {
        places: "Dominos"
    },


    {
        places: "Dunkin Donuts"
    },
    {
        places: "Haldiram"
    },

    {
        places: "KFC"
    },
    {
        places: "Krispy KremeMcDonald"
    },
    {
        places: "Moti Mahal Delux"
    },

    {
        places: "Om Sweets & Snacks"
    },
    {
        places: "Paradise Biryani"
    },
    {
        places: "Pizza Hut"
    },

    {
        places: "Sagar Ratna"
    },
    {
        places: "Subway"
    },
    
    {
        places: "WOW! Momo"
    },
    


]

function Cities() {
    return (
        <div style={{width:"100%"}}>
        <div>
            <h1 style={{marginTop:"100px", display:"flex", marginLeft:"150px"}}>Top Restaurant Chains</h1>
            
            </div>
            <div style={{display:"flex",  marginLeft:"10px", flexWrap:"wrap", flex:"1",marginTop:"30px"}}>
            {
                cities.map((i) => {
                    return(
                     <>  
            <p style={{ display:"flex" ,marginLeft:"150px", color:"#959292"}}>{i.places}</p>
            
            </>
                    )
                })
            }
            </div>





            </div>
    )
}

export default Cities;

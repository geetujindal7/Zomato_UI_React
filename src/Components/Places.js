import React from 'react'
import "./Header.css"

const Place = [
    {
place: "Connaught Place (386 pla... ↪ "  
},
{
    place: "Sector 29 (287 places)",
    },

    {
        place: "Sector 18, Noida (286 places)",
        },
        {
            place: "Rajouri Garden (694 places)",
            },
            {
            place: "Saket (640 places) ↪ "  
},

{
    place: "DLF Cyber City (207 places)",
    },
    {
    place: "Golf Course Road (248 places) ↪ "  
},
{
    place: "DLF Phase 4 (777 places)",
    },
    {
    place: "Delhi University-GTB Nagar (259 places) ↪ "  
},
{
    place: "Indirapuram (1966 places)",
    },
    {
    place: "Vasant Kunj (883 places) ↪ "  
},
{
    place: " Greater Kailash 1 (GK1) (330 places)",
    },
    {
    place: "Chanakyapuri (130 places) ↪ "  
},
{
    place: "Rohini (2745 places)",
    },
    {
    place: "Janpath (54 places) ↪ "  
},
{
    place: "Hauz Khas Village (53 places)",
    },
    {

    place: "Sector 38, Noida (87 places) ↪ "  
},
{
    place: "Janakpuri (936 places)",
    },
    {
    place: "Sector 50 (459 places) ↪ "  
},
{
    place: "MG Road (327 places)",
    },
    {
        place: "DLF Cyber City (207 places)",
        },
        {
        place: "Golf Course Road (248 places) ↪ "  
    },
    {
        place: "DLF Phase 4 (777 places)",
        },
        {
        place: "Delhi University-GTB Nagar (259 places) ↪ "  
    },
    {
        place: "Indirapuram (1966 places)",
        },
        {
        place: "Vasant Kunj (883 places) ↪ "  
    },
    {
        place: " Greater Kailash 1 (GK1) (330 places)",
        },
        {
        place: "Chanakyapuri (130 places) ↪ "  
    },
    {
        place: "Rohini (2745 places)",
        },
        {
        place: "Janpath (54 places) ↪ "  
    },
    
            
]

function Places() {
    return (
        <div style={{width:"100%"}}>

        <div  style={ { display: "flex",flexWrap: "wrap",  marginTop: "50px",flex: "1", marginLeft: "150px" }}>
{
    Place.map((i)=>
    {
        return(
            <div className="place_card">{i.place}
            </div>
        )
    })
}
       

        </div>

        </div>
    )
}


export default Places;


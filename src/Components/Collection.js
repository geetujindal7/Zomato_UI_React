import React from 'react';

const collection = [
    {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuhf6eNoJ5pV6XODylPPGY0MH3B7ng5Gre06lAig-zf-gyfzra",
        title: "Newly Opened",
        place:"13 Places"
    },

    {
        img: "https://b.zmtcdn.com/webFrontend/95f005332f5b9e71b9406828b63335331585809309.png?fit=around|402:360&crop=402:360;*,*",
        title: "Trending This Week",
        place:"30 Places"
    },

    {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGMp3WrU6_PVbGlsv3B5XzBhg_ls2Rsl_9mawYjkbuOTx66_Eg",
        title: "Best of Delhi NCR",
        place:"153 Places"
    },

    {
        img: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQ385hKvZliRU1KEEqBJ7jaQLCa7dEXix0lHXsIgDmMf2ObXLP8",
        title: "Great Cafes",
        place:"29 Places"
    },


]


function Collection() {
  return (
      <>
    <div className="Collect">
      <span style={{fontSize:"40px", fontWeight:"20px", display:"flex", marginBottom:"15px"}}>Collections</span>
      <div style={{display:"flex"}}>
      <span >Explore curated lists of top restaurants, cafes, pubs, and bars in Delhi NCR, based on trends</span>
      <span style={{marginLeft:"180px", color:"rgb(255, 126, 139)" , marginBottom:"10px"}}>All collections in Delhi NCR 💘  </span>
</div>
    </div>
    <div className ="card-body" style={{marginBottom:"70px"}}>

<div style={{display: "flex",
    flexWrap: "wrap",
    marginTop: "30px",
    flex: "1",
    marginLeft: "150px"}}>
{
    collection.map((i)=>
    {
        return(
            <>
            <div className="card_container">
            <div style={{ backgroundImage: `url(${i.img})`, width:"250px", height:"350px" 
    }}>
      <span style={{color:"white", fontSize:"20px", position:"relative", fontWeight:"bold"
}}>{i.title}</span>
<br></br>
<span style={{color:"white", fontSize:"15px", position:"relative", fontWeight:"bold"}}>{i.place}</span>
    </div>

</div>
            </>
        )
    })
}</div>
</div>
<div>
    <h1 style={{fontWeight:"normal"}}>Popular localities in and around <b>Delhi NCR</b></h1>
</div>
    </>
  )
}


export default Collection



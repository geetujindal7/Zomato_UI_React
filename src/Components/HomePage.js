import React from 'react';
import '../App.css';

import Header from './Header';
import Cards from './Cards';
import Collection from './Collection';
import Places from './Places';
import Mobile from './Mobile';
import Footer from './Foote';
import Cities from './Cities';
import Footer_end from './Footer_end';


function HomePage() {
  return (
    <div className="App">
      <Header />
     <Cards />
     <Collection />
     <Places />
     <Mobile />
     <Footer />
     <Cities />
     <Footer_end />
    </div>
  )
}

export default HomePage

import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Cards from './Components/Cards';
import Collection from './Components/Collection';
import Places from './Components/Places';
import Mobile from './Components/Mobile';
import Footer from './Components/Foote';
import Cities from './Components/Cities';
import Footer_end from './Components/Footer_end';

function App() {
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
  );
}

export default App;

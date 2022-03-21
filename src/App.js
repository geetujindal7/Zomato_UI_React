import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import HomePage from './Components/HomePage';
import AR_homepage from './Components/AR_Restaurents/AR_homepage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <>
          
            <HomePage />
          </>} />
          <Route path="/partner_with_us" element={
          <>
           <AR_homepage />
           
          </>} />

      </Routes>
    </Router>
  );
}

export default App;

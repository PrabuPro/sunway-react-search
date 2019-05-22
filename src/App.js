import React from 'react';
import Nav from'./component/Navbar';
import Filter from './component/Filter';
import Tour from './component/Tour';
import './App.css';

function App() {
  return (
    <div>
      <Nav/>
      <div className="container">
          <div className="row body-section pt-5">
             <div className="col-4">
                <Filter />
            </div>
            <div className="col-8">
            <h2>Results</h2>
                <Tour />
            </div> 
          </div>    
      </div>
    </div>
  );
}

export default App;

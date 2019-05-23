import React, {Component} from 'react';
import Nav from'./component/Navbar';
import Filter from './component/Filter';
import Tour from './component/Tour';
import axios from 'axios';
import './App.css';

class App extends Component {

  state = {
    isLoading: false,
    tours: []
  }

  componentDidMount(){
    console.log('componentDidMount')
    axios.get('http://localhost/sunwayholidays/test')
        .then(res => {
            this.setState({
              tours: res.data
            }) 
            
        });
  };


  updateTours = () =>{
    console.log('this');
  }

  render(){
    return (
      <div>
        <Nav/>
        <div className="container">
            <div className="row body-section pt-5">
                <div className="col-4">
                  <Filter updateTours={this.updateTours}/>
              </div>
              <div className="col-8">
              <h2>Results</h2>
                  <Tour tours={this.state.tours}/>
              </div> 
            </div>    
        </div>
      </div>
  );
  
}
  
}

export default App;

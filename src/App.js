import React, {Component} from 'react';
import Nav from'./component/Navbar';
import Filter from './component/Filter';
import Tour from './component/Tour';
import axios from 'axios';
import './App.css';
import loading from './assets/image/search.gif';

class App extends Component {

  state = {
    isLoading: true,
    tours: [],
    romanticHoliday: '',
    couplesFriends: ''
  }

  componentWillMount(){
    console.log('componentWillMount')

    axios.get('http://localhost/sunwayholidays/test')
        .then(res => {
            this.setState({
              tours: res.data,
              isLoading:false
            }) 
        });
  }

  componentDidUpdate(prevProps, prevState){
    
  }

  handleInputChange = (event) => {
    const value = event.target.checked === true ? event.target.value : '' ;
    const name = event.target.name;

    this.setState({
      isLoading: true,
      [name]: value
    }, () => {
      if (!this.state.romanticHoliday && !this.state.couplesFriends) {
        axios.get('http://localhost/sunwayholidays/test')
          .then(res => {
            this.setState({
              tours: res.data,
              isLoading:false
            })
          });
      } else {
        // console.log(value);
        axios.post( 'http://localhost/sunwayholidays/testPost', 
          {
            romanticHoliday: this.state.romanticHoliday,
            couplesFriends: this.state.couplesFriends
          },{
             headers: {
               'Content-Type': 'application/x-www-form-urlencoded'
             }
          }).then(res => {
            this.setState({
              tours: res.data,
              isLoading: false
            });
          }).catch(error => console.log(error));
            
          
      }
    });
  }

 

  render(){
    return (
      <div>
        <Nav/>
        <div className="container">
            <div className="row body-section pt-5">
                <div className="col-4">
                  <Filter 
                      romanticHoliday={this.state.romanticHoliday}
                      couplesFriends={this.state.couplesFriends}
                      handleInputChange={this.handleInputChange}/>
              </div>
              <div className="col-8">
              <h2>Results</h2>
              
              { this.state.isLoading ? 
                <div className="loading">
                  <img src={loading} className="loading-img" alt=""/>
                  <h3>Searching Your Tours...</h3>
                </div> : <Tour tours={this.state.tours}/>}
                  
              </div> 
            </div>    
        </div>
      </div>
  );
  
}
  
}

export default App;

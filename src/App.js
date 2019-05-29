import React, {Component} from 'react';
import Nav from'./component/Navbar';
import Filter from './component/Filter';
import Tour from './component/Tour';
import axios from 'axios';
import './App.css';

class App extends Component {

  state = {
    isLoading: false,
    tours: [],
    romanticHoliday: '',
    couplesFriends: ''
  }

  componentWillMount(){
    console.log('componentWillMount')

    axios.get('http://localhost/sunwayholidays/test')
        .then(res => {
            this.setState({
              tours: res.data
            }) 
        });
  }

  componentDidUpdate(prevProps, prevState){
    
  }

  handleInputChange = (event) => {
    const value = event.target.checked === true ? event.target.value : '' ;
    const name = event.target.name;

    this.setState({
      [name]: value
    }, () => {
      if (!this.state.romanticHoliday && !this.state.couplesFriends) {
        axios.get('http://localhost/sunwayholidays/test')
          .then(res => {
            this.setState({
              tours: res.data
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
              tours: res.data
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
                  <Tour tours={this.state.tours}/>
              </div> 
            </div>    
        </div>
      </div>
  );
  
}
  
}

export default App;

import React, {Component} from 'react';
import { connect } from "react-redux";
import { TO_HISTORY } from '../constants/action-types';
//internal import
import Headers from './Headers';
import Form from './Form';
import Weather from './Weather';
import store from '../store';

const API_KEY = 'c5b27ea3cfd3a70d0a3d7ce16693bebc';
const baseURL= 'http://api.openweathermap.org/data/2.5/';

class App extends Component{
  state = {};
    getWeather = async(e)=>{// here we defined he method to get a call for the API
      e.preventDefault();
      const city = e.target.elements.city.value;
      const country = e.target.elements.country.value;
      const callApi = await fetch(`${baseURL}weather?q=${city}&${country}&appid=${API_KEY}&units=metric`);
      const data = await callApi.json();
      if (city && city === data.name){
        console.log(data);
        this.setState({
          temperature :data.main.temp,
          city: data.name,
          id: data.id,
          country: data.sys.country,
          humidity: data.main.humidity,
          condition: [data.weather[0].main, data.weather[0].description].join(', '),
          error:''
        });
      }else{
        this.setState({
          temperature :'',
          city: '',
          id:'',
          country:'',
          humidity:'',
          condition:'',
          error:'please! pass in a correct city name.'
        });
      }
    }

  render(){
    return(
      
      <div>
        console.log(current);
      <Headers />
      <Form onWeather={store}/>
      <Weather
        temperature={this.current.city}
        city={this.current.city}
        id={this.current.id}
        country={this.current.country}
        humidity={this.current.humidity}
        condition={this.current.condition}
        error={this.current.error}

        />
      </div>
    );
  };
}
const mapStoreToProps = (store) => {
  return {
    current: store.current
  }
};
const mapActionsToProps = {
  onWeather: TO_HISTORY
};
export default connect(mapStoreToProps, mapActionsToProps)(App);



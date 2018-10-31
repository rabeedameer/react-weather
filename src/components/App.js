import React, {Component} from 'react';
import { toHistory } from '../actions';
//internal import
import Headers from './Headers';
import Form from './Form';
import Weather from './Weather';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';



const API_KEY = 'c5b27ea3cfd3a70d0a3d7ce16693bebc';
const baseURL= 'http://api.openweathermap.org/data/2.5/';

class App extends Component{

    getWeather = async(e)=>{// here we defined he method to get a call for the API
      e.preventDefault();
      console.log(this.props);
      const city = e.target.elements.city.value;
      const country = e.target.elements.country.value;
      const callApi = await fetch(`${baseURL}weather?q=${city}&${country}&appid=${API_KEY}&units=metric`);
      const data = await callApi.json();
      if (city && city === data.name){
      
        this.props.onWeather({
          temperature :data.main.temp,
          city: data.name,
          id: data.id,
          country: data.sys.country,
          humidity: data.main.humidity,
          condition: [data.weather[0].main, data.weather[0].description].join(', '),
          error:''
        });
      }else{
        this.props.onWeather({
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
    const {current} = this.props;
    
    return(
      
      <div>
      <Headers />
      <Form getWeather={this.getWeather}/>{/*we passed the method as 'props'*/}
      <Weather
        temperature={current.temperature}
        city={current.city}
        id={current.id}
        country={current.country}
        humidity={current.humidity}
        condition={current.condition}
        error={current.error}
        />
      <Link to="/history">
      history
      </Link>

      </div>
      
    );
  }
}
const mapStoreToProps = (store) => {
  return {
    current: store.current
  }
};
const mapActionsToProps = {
  onWeather: toHistory
};
export default connect(mapStoreToProps, mapActionsToProps)(App);



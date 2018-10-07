import React, {Component} from 'react';

//internal import
import Headers from './Headers';
import Form from './Form';
import Weather from './Weather';

const API_KEY = 'c5b27ea3cfd3a70d0a3d7ce16693bebc';
const baseURL= 'http://api.openweathermap.org/data/2.5/';

class App extends Component{
  state = {
    temperature:'',
    city: '',
    country:'',
    humidity:'',
    condition: '',
    error:''
  }
    getWeather = async(e)=>{// here we defined he method to get a call for the API
      e.preventDefault();
      const city = e.target.elements.city.value;
      const callApi = await fetch(`${baseURL}weather?q=${city}&appid=${API_KEY}&units=metric`);
      const data = await callApi.json();
      if (city){
        console.log(data);
        this.setState({
          temperature :data.main.temp,
          city: data.name,
          country: data.sys.country,
          humidity: data.main.humidity,
          condition: data.weather[0].description,
          error:''
        });
      }
    }
  render(){
    return(
      <div>
      <Headers />
      <Form getWeather={this.getWeather}/>{/*we passed the method as 'props'*/}
      <Weather
        temperature={this.state.temperature}
        city={this.state.city}
        country={this.state.country}
        humidity={this.state.humidity}
        condition={this.state.condition}
        error={this.state.error}
        />
      </div>
    );
  }
}

export default App;

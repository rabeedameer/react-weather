import React, {Component} from 'react';
import {toHistory} from '../actions';
//internal import
import Headers from './Headers';
import Form from './Form';
import Weather from './Weather';
import {connect} from 'react-redux';

const API_KEY = 'c5b27ea3cfd3a70d0a3d7ce16693bebc';
const baseURL = 'http://api.openweathermap.org/data/2.5/';

class App extends Component {
  componentDidMount() {
    document.title = "Weather | Home";

  };

  getWeather = async (e) => { // here we defined he method to get a call for the API
    e.preventDefault();
    const city = e.target.elements.city.value;
    const callApi =
      await fetch(`${baseURL}weather?q=${city}&appid=${API_KEY}&units=metric`);
    const data = await callApi.json();
    if (city === data.name) {

      this.props.onWeather({
        temperature: data.main.temp,
        city: data.name,
        id: data.id,
        country: data.sys.country,
        humidity: data.main.humidity,
        condition: [
          data.weather[0].main,
          data.weather[0].description
        ].join(', '),
        error: ''
      });
    } else {
        console.log( 'please! pass in a correct city name.');
      //this should be fixed to show error message
    }
  }

  render() {
    const {current} = this.props;

    return (
      <div>
        <Headers/>
        <Form
          getWeather={this.getWeather}
        />
        <Weather
          temperature={current.temperature}
          city={current.city}
          id={current.id}
          country={current.country}
          humidity={current.humidity}
          condition={current.condition}
          error={current.error}/>

    </div>);
  }
}
const mapStoreToProps = (store) => {
  return {current: store.current}
};
const mapActionsToProps = {
  onWeather: toHistory
};
export default connect(mapStoreToProps, mapActionsToProps)(App);

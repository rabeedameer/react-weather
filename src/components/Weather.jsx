import React, {Component} from 'react';


class Weather extends Component{
  render(){
    return(
      <div>
        {this.props.city && this.props.country && <p>Location: {this.props.city}, {this.props.country}</p>}
        {this.props.temperature && <p>Temperature: {this.props.temperature}°</p>}
        {this.props.humidity && <p>Humidity: {this.props.humidity}</p>}
        {this.props.condition && <p>Conditions: {this.props.condition}</p>}
        {this.props.error && <p>Attention: {this.props.error}</p>}
      </div>
    );
  }
}

export default Weather;

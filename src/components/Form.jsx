import React, {Component} from 'react';


class  Form extends Component{
  render(){
    return(
      <form  onSubmit={this.props.getWeather}>{/*it calls the method set in props*/}
        <input type="text" name="city" placeholder="city..."/>
        <input type="text" name="" placeholder="country..."/>
        <button>Show Weather</button>
      </form>
    );
  }
}

export default Form;

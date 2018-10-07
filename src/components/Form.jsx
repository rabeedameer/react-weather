import React, {Component} from 'react';


class  Form extends Component{
  render(){
    return(
      <form>
        <input type="text" name="city" placeholder="city..."/>
        <input type="text" name="" placeholder="country..."/>
        <button>Show Weather</button>
      </form>
    );
  }
}

export default Form;

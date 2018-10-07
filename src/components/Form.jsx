import React from 'react';


const Form = (props)=>(
  <form  onSubmit={props.getWeather}>{/*it calls the method set in props*/}
  <input type="text" name="city" placeholder="city..."/>
  <input type="text" name="" placeholder="country..."/>
  <button>Show Weather</button>
</form>);

export default Form;

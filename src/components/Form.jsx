import React from 'react';


const Form = (props)=>(
  <form  onSubmit={props.getWeather}>{/*it calls the method set in props*/}
  <input type="text" name="city" placeholder="City..." required/>
  <input type="text" name="country" placeholder="Country..."/>
  <button className="btn btn-outline-success">Check Weather</button>
</form>);

export default Form;

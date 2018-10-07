import React, {Component} from 'react';

//internal import
import Headers from './Headers';
import Form from './Form';
import Weather from './Weather';

class App extends Component{
  render(){
    return(
      <div>
      <Headers />
      <Form />
      <Weather/>
      </div>
    );
  }
}

export default App;

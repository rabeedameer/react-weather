import React, {Component} from 'react';

//internal import
import Headers from './Headers';
import Form from './Form';

class App extends Component{
  render(){
    return(
      <div>
      <Headers />
      <Form />
      </div>
    );
  }
}

export default App;

import React from 'react';
import {Row, Col} from 'reactstrap';

const Form = (props) => (<Row className="container m-auto">
  <Col className="col-sm-12 .col-md-6 .offset-md-3">
    <form onSubmit={props.getWeather}>{/* it calls the method set in props */}
      <input type="text" name="city" placeholder="City..." required="required"/>
      <input type="text" name="country" placeholder="Country..."/>
      <button className="btn btn-outline-success">Check Weather</button>
    </form>
  </Col>

</Row>);

export default Form;

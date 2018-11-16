import React from 'react';
import {Row, Col} from 'reactstrap';

const Form = (props) => (<Row className="container m-auto">
  <Col className="col-sm-12 .col-md-6 .offset-md-3">
    <form onSubmit={props.getWeather}>{/* it calls the method set in props */}
    <div className="input-group mb-3">
      <input type="text" name="city" className="form-control" placeholder="City..." required="required" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"/>
      <div className="input-group-append">
        <button className="btn btn-outline-success">Check Weather</button>
      </div>
    </div>
      {/* <input type="text" name="city" class="form-control" placeholder="City..." required="required" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"/> */}
      {/* <input type="text" name="country" placeholder="Country..."/> */}
    </form>
  </Col>

</Row>);

export default Form;

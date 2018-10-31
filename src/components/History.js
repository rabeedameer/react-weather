import React from "react";
import { Link } from 'react-router-dom';
import {connect } from 'react-redux';


class History extends React.Component {
  componentDidMount() {
    document.title = "History | Weather App";
  }

  render() {
      console.log(this.props.history);
    return (
      <div className="container">
        
        <div className="alert alert-warning">
          <strong>
          check the history  
          </strong>
          
        </div>
        <button>
            <Link to="/">Back</Link>
        </button>
      </div>
    );
  }
}
const mapStoreToProps = (store) => {
    return {
      history: store.history
    }
}
export default connect(mapStoreToProps)(History);

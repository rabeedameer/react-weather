import React from "react";
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMapMarkerAlt, faThermometerHalf} from '@fortawesome/free-solid-svg-icons';
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Row,
  Col
} from 'reactstrap';
import IMG from '../images/IMG.jpg';

import Headers from './Headers';

class History extends React.Component {

  componentDidMount() {
    document.title = "History | Weather App";
  }

  render() {
    const logs = this.props.history;
    return (<div>
      <Headers/>
      <Row className="container m-auto">
        {
          logs.map((log, i) => (<Col lg="3" sm="6" xs="12" mt-1="mt-1" key={i}>
            <Card>
              <CardImg top="top" width="100%" src={IMG} alt="image"/>
              <CardBody>
                <CardTitle className="">{`${log.city},${log.country}`}<FontAwesomeIcon icon={faMapMarkerAlt} className="text-success ml-2"/></CardTitle>
                <CardSubtitle>{`${log.temperature} °C`}<FontAwesomeIcon icon={faThermometerHalf} className="text-danger ml-2"/></CardSubtitle>
                <CardText>{log.condition}</CardText>
                <Button>
                  <Link to="/">Back</Link>
                </Button>
              </CardBody>
            </Card>
          </Col>))
        }
      </Row>
    </div>);
  }
}

const mapStoreToProps = (store) => {
  return {history: store.history}
}
export default connect(mapStoreToProps)(History);

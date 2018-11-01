import React from "react";
import { Link } from 'react-router-dom';
import {connect } from 'react-redux';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMapMarkerAlt, faThermometerHalf} from '@fortawesome/free-solid-svg-icons';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Row, Col } from 'reactstrap';
  

class History extends React.Component {

  componentDidMount() {
    document.title = "History | Weather App";
  }

  render() {
      const logs = this.props.history;
    return (
         
            <Row className="container m-auto">
                {logs.map((log, i) => (
                <Col lg="3" sm="6" xs="12" mt-1="mt-1" key={i}>
                    <Card>
                        <CardImg top width="100%" src={"../../public/images/bg.jpg"} alt="image" />
                        <CardBody>
                        <CardTitle className="">{log.city}<FontAwesomeIcon icon={faMapMarkerAlt} className="text-success ml-2"/></CardTitle>
                        <CardSubtitle>{log.temperature}<FontAwesomeIcon icon={faThermometerHalf} className="text-danger ml-2"/></CardSubtitle>
                        <CardText>{log.condition}</CardText>
                        <Button>
                            <Link to="/">Back</Link>
                        </Button>
                        </CardBody>
                    </Card>
                </Col>))
                }
            </Row>);
  }}

const mapStoreToProps = (store) => {
    return {
      history: store.history
    }
}
export default connect(mapStoreToProps)(History);

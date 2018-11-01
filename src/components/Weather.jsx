import React from 'react';
import { Link } from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMapMarkerAlt, faThermometerHalf,faTint} from '@fortawesome/free-solid-svg-icons';
import { Card, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Row, Col } from 'reactstrap';
// import bg from '../images/IMG_20181017_160629.jpg';
const Weather = (props)=>(

         <Row className="container m-auto">
             <Col className="col-bg-6 .col-md-3 ">
                 <Card>
                     {/* <CardImg top width="100%" src={bg} alt="image" /> */}
                     <CardBody>
                     <CardTitle className="display-1">
                       {props.city}

                       {props.city &&<FontAwesomeIcon
                        icon={faMapMarkerAlt} className="text-success ml-2"/>}
                     </CardTitle>

                     <CardSubtitle className="display-4">
                      {props.temperature}
                      {props.temperature && <FontAwesomeIcon icon={faThermometerHalf} className="text-danger ml-2"/>}
                      </CardSubtitle>

                      <CardSubtitle className="display-4">
                      {props.humidity}
                      {props.humidity &&
                      <FontAwesomeIcon icon={faTint} className="text-primary ml-2"/>}

                      </CardSubtitle>

                     <CardText>{props.condition}</CardText>
                     <CardText>{props.error}</CardText>
                     <Button>
                      <Link to="/history">
                        history
                      </Link>
                     </Button>
                     </CardBody>
                 </Card>
             </Col>

         </Row>


    );


export default Weather;

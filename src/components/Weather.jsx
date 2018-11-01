import React from 'react';
import { Link } from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMapMarkerAlt, faThermometerHalf,faTint} from '@fortawesome/free-solid-svg-icons';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Row, Col } from 'reactstrap';

const Weather = (props)=>(
         
         <Row className="container m-auto">
             <Col className="col-sm-12 .col-md-6 .offset-md-3">
                 <Card>
                     <CardImg top width="100%" src="../../public/images/bg.jpg" alt="image" />
                     <CardBody>
                     <CardTitle className="display-1">
                       {props.city &&
                       <FontAwesomeIcon 
                        icon={faMapMarkerAlt} className="text-success ml-2"/>}
                     </CardTitle>

                     <CardSubtitle className="display-4">
                      {props.temperature}
                      <FontAwesomeIcon icon={faThermometerHalf} className="text-danger ml-2"/>
                      </CardSubtitle>

                      <CardSubtitle className="display-4">
                      {props.humidity}
                      <FontAwesomeIcon icon={faTint} className="text-primary ml-2"/>
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

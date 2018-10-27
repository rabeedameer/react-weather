import React from 'react';


const Weather = (props)=>(
      <div>
        { props.city && props.country &&
          <p>
            Location: {props.city}, { props.country}
          </p> }


        { props.temperature &&
          <p>
            Temperature: {props.temperature}°
          </p> }

        { props.humidity &&
          <p>
            Humidity: {props.humidity}
          </p> }

        { props.condition &&
          <p>
            Conditions: {props.condition}
          </p> }

        { props.error &&
          <p>
            Attention: {props.error}
          </p> }

          { props.id &&
            <p className="text-muted">
              ID: {props.id}
            </p> }
      </div>

    );


export default Weather;

import React from 'react'
import { Container } from '@material-ui/core';
import GoogleMapReact from 'google-map-react';
import { connect } from 'react-redux'


const AnyReactComponent = ({ text }) => <div>{text}</div>

const Bar = (props) => {
  const id = props.match.params.id
  const bar = props.bars.find(c => c.id == id)

  const defaultProps = {
    center: {
      lat: Number(bar.latitude),
      lng: Number(bar.longitude),
    },
    zoom: 13
  };

  // console.log(defaultProps.center)

  return (
  <div>
    <Container style={{ display: "flex", flexDirection: "column", margin: '5% 0 0', textAlign: "center"}}>
      {console.log(process.env.REACT_APP_GOOGLE_KEY)}
      <h2> {bar.name}</h2>
      <h4> {bar.address}</h4>
      <h4> {bar.hours}</h4>
      <h4> {bar.description}</h4>
    </Container>
          <Container style={{ display: "flex", flexDirection: "column", height: "500px", width: '100%'}}>
          <GoogleMapReact
            bootstrapURLKeys={{ key: process.env.REACT_APP_YOUR_API_KEY_NAME }}
            defaultCenter={defaultProps.center}
            defaultZoom={defaultProps.zoom}
          >
            <AnyReactComponent 
            lat={bar.latitude}
            lng={bar.longitude} 
            text={bar.name} />
          </GoogleMapReact>
    </Container>
   </div>
  )
}



const mapStateToProps = (state) => {
    return {
        bars: state.bars
    }
}

export default connect(mapStateToProps)(Bar)

















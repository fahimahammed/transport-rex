import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
  width: '55%',
  height: '85%',
  borderRadius: '15px'
};

export class MapContainer extends Component {
  render() {
    return (
        <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={
          {
            lat: -1.2884,
            lng: 36.8233
          }
        }
      />
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBVf-YVdnA1wBuXFEDhKw68Z0uSoe2zyDM'
})(MapContainer);
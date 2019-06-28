import React, { Component } from 'react';
import './Mapbox.css';
import CampaignItem from '../Campaign/CampaignItem';
import Search from './components/Search';
import MapGL, { Marker, Popup, NavigationControl, FullscreenControl } from 'react-map-gl';
import CampaignPin from '../Campaign/CampaignPin';
import CampaignPinInfo from '../Campaign/CampaignPinInfo'
import CAMPAIGN from '../Campaign/campaigns.json'

const TOKEN = 'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4M29iazA2Z2gycXA4N2pmbDZmangifQ.-g_vE53SD2WrJ6tFX7QHmA';

const fullscreenControlStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  padding: '10px'
};

const navStyle = {
  position: 'absolute',
  top: 36,
  left: 0,
  padding: '10px'
};

export default class Map extends Component {

  constructor(props: Props) {
    super(props);
    this.state = {
      viewport: {
        longitude: -118.483395,
        latitude: 34.023554,
        zoom: 13,
        bearing: 0,
        pitch: 0
      },
      popupInfo: null
    };
  }

  _updateViewport = viewport => {
    this.setState({viewport});
  };

  _renderCampaignMarker = (city, index) => {
    return (
      <Marker key={`marker-${index}`} longitude={city.longitude} latitude={city.latitude}>
        <CampaignPin size={20} onClick={() => this.setState({popupInfo: city})} />
      </Marker>
    );
  };

  _renderPopup() {
    const {popupInfo} = this.state;

    return (
      popupInfo && (
        <Popup
          tipSize={5}
          anchor="top"
          longitude={popupInfo.longitude}
          latitude={popupInfo.latitude}
          closeOnClick={false}
          onClose={() => this.setState({popupInfo: null})}
        >
          <CampaignPinInfo info={popupInfo} />
        </Popup>
      )
    );
  }

  render() {
    const {viewport} = this.state;

    return (
      <div className="map">
        <MapGL
          {...viewport}
          width="100%"
          height="78.5vh"
          scrollZoom={ false }
          mapStyle="mapbox://styles/mapbox/dark-v9"
          onViewportChange={this._updateViewport}
          mapboxApiAccessToken={TOKEN}
        >

          {CAMPAIGN.map(this._renderCampaignMarker)}

          {this._renderPopup()}

          <div className="fullscreen" style={fullscreenControlStyle}>
            <FullscreenControl />
          </div>
          <div className="nav" style={navStyle}>
            <NavigationControl onViewportChange={this._updateViewport} />
          </div>
        </MapGL>
      </div>
    );
  }
}


import React, { Component } from 'react';
import Mapbox from '../Map/Mapbox';
import CampaignItem from './CampaignItem';
import './Campaign.css';
import locations from './campaigns.json'


export default class Campaign extends Component {
    constructor(props) {
        super(props);
        this.state = {
            locations: locations
        };
    }
    render() {
        const CampaignList = (props) => {
            return props.locations.map((location) => (
                <CampaignItem location={location}/>
            ));
        }
        return (
            <div>
                <Mapbox/>
                <div className='campaign__list'>
                    <h2>Campaigns Near By:</h2>
                    <CampaignList locations={this.state.locations}/>
                </div>
            </div>
        )
    }
    
}

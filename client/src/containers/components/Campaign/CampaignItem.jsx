import React, { Component } from 'react';
import './CampaignItem.css';

class CampaignItem extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div className='campaign__item'>
                <div className='campaign__info'>
                    <div className='campaign__body'>
                        <a href={this.props.location.link}><h3>{this.props.location.name}</h3></a>
                        <p>{this.props.location.type}</p>
                        <p>{this.props.location.address}</p>
                    </div>
                    <div className='campaign__dist'><p>{this.props.location.dist}</p></div>
                </div>
                <div className='campaign__tracker'>
                    <ul className='tracker'>
                        <li className='tracker__cube seven'></li>
                        <li className='tracker__cube seven'></li>
                        <li className='tracker__cube seven'></li>
                        <li className='tracker__cube seven'></li>
                        <li className='tracker__cube seven'></li>
                        <li className='tracker__cube'></li>
                        <li className='tracker__cube'></li>
                        <li className='tracker__cube'></li>
                        <li className='tracker__cube'></li>
                        <li className='tracker__cube'></li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default CampaignItem;

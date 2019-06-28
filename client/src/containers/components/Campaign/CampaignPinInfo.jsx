import React, {PureComponent} from 'react';
import CampaignItem from './CampaignItem';

export default class CampaignPinInfo extends PureComponent {
  render() {
    const {info} = this.props;

    return (
      <div className='infowindow'>
        <CampaignItem location={info}/>
        <a className='example' href='/example'>Details</a>
      </div>
    );
  }
}
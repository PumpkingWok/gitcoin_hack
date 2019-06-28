import React, { Component } from 'react';
import Camera from 'react-html5-camera-photo';
function onTakePhoto(dataUri) {
  // Do stuff with the dataUri photo...
  console.log('takePhoto');
}
const cameraElement = (
  <div>
    <Camera
      onTakePhoto = { (dataUri) => { onTakePhoto(dataUri); } }
    />
  </div>
);
class CameraCustom extends Component {
  render() {
    return (
      cameraElement
    );
  }
}

export default CameraCustom;

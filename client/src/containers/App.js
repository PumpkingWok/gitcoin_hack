import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Splash from "./components/Splash/Splash";

import Profile from "./components/Profile/Profile";
import Notifications from "./components/Notifications/Notifications";
import Education from "./components/Education/Education";
import Settings from "./components/Settings/Settings";
import Campaign from "./components/Campaign/Campaign";
import NewCampaign from "./components/Campaign/NewCampaign";

import CameraCustom from "./components/Camera/camera";
import Home from "./components/Home/Options";


class App extends Component {

    render() {
        return (

        <Router>
            <div className="app">
                <Route exact path="/" component={Home} />
                <Route exact path="/welcome" component={Splash} />

                <Route exact path="/profile" component={Profile} />
                <Route exact path="/notifications" component={Notifications} />
                <Route exact path="/education" component={Education} />
                <Route exact path="/settings" component={Settings} />
                <Route exact path="/campaign" component={Campaign} />
                <Route exact path="/new-campaign" component={NewCampaign} />
                <Route exact path="/camera-custom" component={CameraCustom} />
                <Header />
            </div>
        </Router>
    );
  }
}

export default App;

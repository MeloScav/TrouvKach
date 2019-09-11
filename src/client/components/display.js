// Some error to find a fix

/* eslint-disable react/no-multi-comp*/

import * as React from "react";

const x = document.querySelector("#localTarget");

const L = require("leaflet");

function showPosition(position) {
    x.innerHTML = `Latitude: ${position.coords.latitude}<br>Longitude: ${position.coords.longitude}`;

    const mymap = L.map("mapid").setView(
        [position.coords.latitude, position.coords.longitude],
        13,
    );

    L.tileLayer(
        "https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw",
        {
            maxZoom: 18,
            attribution:
                'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
                '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
                'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            id: "mapbox.streets",
        },
    ).addTo(mymap);
}

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

class Display extends React.Component {
    constructor(props) {
        super(props);
        this.handleDisplayMap = this.handleDisplayMap.bind(this);
        this.handleDisplayAtm = this.handleDisplayAtm.bind(this);
        this.state = {showAtm: false};
    }

    handleDisplayMap() {
        this.setState({showAtm: true});
    }

    handleDisplayAtm() {
        this.setState({showAtm: false});
    }
    render() {
        const showAtm = this.state.showAtm;
        let button;

        if (showAtm) {
            button = <MapButton onClick={this.handleDisplayAtm} />;
        } else {
            button = <AtmButton onClick={this.handleDisplayMap} />;
        }

        return (
            <div>
                <Main showAtm={showAtm} />
                {button}
            </div>
        );
    }
}

function Main(props) {
    const showAtm = props.showAtm;

    // display ATM.
    if (showAtm) {
        return <h1>{"Modal for the ATM"}</h1>;
    }

    if (!showAtm) {
        // Refresh Map on toogle ATM -> MAP
        getLocation();
        // End of call for the map
    }

    // display MAP
    return <div id={"mapid"} />;
}

function AtmButton(props) {
    return (
        <button type={"button"} onClick={props.onClick}>
            {"ATM"}
        </button>
    );
}

function MapButton(props) {
    return (
        <button type={"button"} onClick={props.onClick}>
            {"MAP"}
        </button>
    );
}

export default Display;

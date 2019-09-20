import * as React from "react";
import {Map, TileLayer} from "react-leaflet";
// import ReactPopup from "./react-popup";
import ReactMarker from "./react-marker";

const axios = require("axios");
axios.get("/terminals").then(response => {
    // eslint-disable-next-line no-console
    console.log(response.data);
});

const position = [50.6326, 5.5797];
const ReactMap = () => (
    <div>
        <Map center={position} zoom={16.5} zoomControl={false}>
            <TileLayer
                url={"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}
                attribution={
                    'Map data &copy;, Imagery © <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                }
            />

            {/* Marker for user position */}
            <ReactMarker center={position} />

            {/* Popups for terminals position */}
        </Map>
    </div>
);

export default ReactMap;

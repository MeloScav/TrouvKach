import * as React from "react";
import {Map, TileLayer} from "react-leaflet";
// import ReactPopup from "./react-popup";
import ReactMarker from "./react-marker";

const position = [50.6326, 5.5797];
const ReactMap = () => (
    <div>
        <Map center={position} zoom={16.5} zoomControl={false}>
            <TileLayer
                url={"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}
                attribution={
                    'Map data &copy;, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>'
                }
            />
            <ReactMarker center={position} />
        </Map>
    </div>
);

export default ReactMap;

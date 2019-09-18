import * as React from "react";
import {Map, TileLayer} from "react-leaflet";
import ReactMarker from "./react-marker";
// LIEGE
const position = [50.6326, 5.5797];
// Bruxelle
const position2 = [50.85045, 4.34878];

const ReactMap = () => (
    <div>
        <Map center={position} zoom={16.5} zoomControl={false}>
            <TileLayer
                url={"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}
                attribution={
                    'Map data &copy;, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>'
                }
            />
            <ReactMarker position={position} title={"Liege"} />
            <ReactMarker position={position2} title={"Bxl"} />
        </Map>
    </div>
);

export default ReactMap;

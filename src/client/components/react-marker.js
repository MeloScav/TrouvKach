import * as React from "react";
import {Marker} from "react-leaflet";
import Reactpopup from "./react-popup";
// Bruxelle
//const position = [50.85045, 4.34878];

const ReactMarker = props => (
    <Marker position={props.position} title={props.title}>
        <Reactpopup />
    </Marker>
);

export default ReactMarker;

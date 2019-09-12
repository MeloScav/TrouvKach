import * as React from "react";
import {Marker} from "react-leaflet";

const position = [50.6328, 5.5799];
const ReactMarker = () => (
    <Marker position={position} title={"You are here."} />
);

export default ReactMarker;

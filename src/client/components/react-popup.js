import * as React from "react";
import {Marker, Popup} from "react-leaflet";

const position = [50.6326, 5.5797];
const ReactPopup = () => (
    <Marker position={position}>
        <Popup>
            {"A pretty CSS3 popup."}
            <br />
            {"Easily customizable."}
        </Popup>
    </Marker>
);

export default ReactPopup;

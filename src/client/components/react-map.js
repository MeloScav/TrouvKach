import * as React from "react";
import {Map, TileLayer} from "react-leaflet";
// import ReactPopup from "./react-popup";
import ReactMarker from "./react-marker";

const position = [50.6326, 5.5797];

//const tabPosition = [[50.6326, 5.5797], [60.6, 6.5], [55.4582, 4.2351]];
/*const boucleP = () => {
    for (let i = 0; i < tabPosition.length; i++) {
        let element = tabPosition[i];
    }
};*/

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

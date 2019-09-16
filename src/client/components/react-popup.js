import * as React from "react";
import {Marker, Popup} from "react-leaflet";

const position = [50.6326, 5.5797];

const ReactPopup = () => (
    <Marker position={position}>
        <Popup>
            <div className={"titleBank"}>{"Name Bank"}</div>
            <div className={"bodyBank"}>
                {"Informations"}
                <div>
                    <button type={"button"}>{"see more"}</button>
                </div>
            </div>
        </Popup>
    </Marker>
);

export default ReactPopup;

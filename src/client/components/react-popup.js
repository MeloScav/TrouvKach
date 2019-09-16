import * as React from "react";
import {Marker, Popup} from "react-leaflet";

const position = [50.6326, 5.5797];

const styleTitle = {
    fontSize: "16px",
    fontWeight: "bold",
};
const styleBody = {
    margin: 0,
    padding: 0,
    fontSize: "13px",
};

const ReactPopup = () => (
    <Marker position={position}>
        <Popup>
            <div style={styleTitle}>{"Name Bank"}</div>
            <div style={styleBody}>
                <ul className={"listPopup"}>
                    <li>{"Informations"}</li>
                    <li>{"lalala"}</li>
                </ul>
                <div>
                    <button type={"button"} className={"buttonPopup"}>
                        {"see more"}
                    </button>
                </div>
            </div>
        </Popup>
    </Marker>
);

export default ReactPopup;

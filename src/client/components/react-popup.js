import * as React from "react";
import {Marker, Popup} from "react-leaflet";
import Button from "./button";

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

const styleButton = {
    color: "#fff",
    fontSize: "12px",
    padding: "6px 5px 6px 5px",
    borderRadius: "12px 0 12px 0",
    backgroundColor: "rgb(71,139,249)",
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
                    <Button style={styleButton} value={"see more"} />
                </div>
            </div>
        </Popup>
    </Marker>
);

export default ReactPopup;

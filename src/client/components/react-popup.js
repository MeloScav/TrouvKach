import * as React from "react";
import {Popup} from "react-leaflet";
import Button from "./button";
//import Modal from "./modal";

// const position = [50.6326, 5.5797];

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
);

export default ReactPopup;

import * as React from "react";
import {Popup} from "react-leaflet";
import Button from "./button";
import Modal from "./modal";
import buttonMore from "./assets/more.png";

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
    borderRadius: "10%",
    backgroundColor: "rgb(79,179,218)",
};

const ReactPopup = () => {
    // Used to tell react to observe this variable that changes
    const [show, setShow] = React.useState(false);

    // In the "if", we need a function "onClose"
    // which allows the return to the initial value of the show
    if (show === true) {
        return <Modal onClose={() => setShow(false)} />;
    }
    return (
        <Popup>
            <div style={styleTitle}>{"Name Bank"}</div>
            <div style={styleBody}>
                <ul className={"listPopup"}>
                    <li>{"Informations............."}</li>
                    <li>{"lalala"}</li>
                </ul>
                <div>
                    {/* on Click, we put in true (the show) with setShow */}
                    <Button
                        class={"buttonPopup"}
                        style={styleButton}
                        value={"see more"}
                        onClick={() => setShow(true)}
                        img={buttonMore}
                        alt={"button more"}
                    />
                </div>
            </div>
        </Popup>
    );
};

export default ReactPopup;

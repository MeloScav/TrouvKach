import * as React from "react";
import {createPortal} from "react-dom";
import Button from "./button";
import buttonClose from "./assets/close-button.png";

const styleModal = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "center",
    backgroundColor: "#fff",
    width: "50%",
    zIndex: "1000",
    position: "absolute",
    top: "25%",
    left: "25%",
    border: "20px solid rgba(0, 0, 0, 0.3)",
    backgroundClip: "padding-box",
    borderRadius: "1%",
    paddingLeft: "15px",
    paddingRight: "5px",
    paddingBottom: "10px",
};
const styleDiv2 = {
    alignSelf: "center",
};
const styleTitleModal = {
    textAlign: "center",
};
const styleText = {
    alignSelf: "center",
};
const styleButtonM = {
    alignSelf: "start",
    borderColor: "transparent",
    backgroundColor: "transparent",
    width: "30px",
    marginTop: "7px",
};
const styleDivButtons = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
};
const styleButotnDelete = {};

// Modal with settings "onClose", which will be called at the click
// Allows the return to the initial value of the popup
const Modal = ({onClose}) => {
    // Used to tell react to observe this variable that changes
    const [show, setShow] = React.useState(true);

    if (show === false) {
        // If false, the modal disappears
        return null;
    }
    return createPortal(
        <div style={styleModal}>
            <div>
                {/* on Click, we put in false (the show) with setShow */}
                <Button
                    class={"buttonModal"}
                    style={styleButtonM}
                    onClick={() => {
                        setShow(false);
                        onClose();
                    }}
                    img={buttonClose}
                    alt={"button close"}
                />
            </div>
            <div style={styleDiv2}>
                <h4 style={styleTitleModal}>{"Name Bank"}</h4>
                <div style={styleText}>
                    <p>{"Information bank"}</p>
                    <p>{"laaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"}</p>
                </div>
            </div>
            <div style={styleDivButtons}>
                <Button style={styleButotnDelete} value={"Delete"} />
                <Button value={"Update"} />
            </div>
        </div>,
        document.querySelector("#modal-container"),
    );
};

export default Modal;

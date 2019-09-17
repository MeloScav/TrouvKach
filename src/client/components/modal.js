import * as React from "react";
import {createPortal} from "react-dom";
import Button from "./button";

const styleModal = {
    display: "block",
    backgroundColor: "#fff",
    width: "50%",
    zIndex: "1000",
    position: "absolute",
    top: "25%",
    left: "25%",
    border: "20px solid rgba(0, 0, 0, 0.3)",
    backgroundClip: "padding-box",
    paddingLeft: "15px",
    paddingRight: "15px",
    paddingBottom: "10px",
};

const Modal = () => {
    // Used to tell react to observe this variable that changes
    const [show, setShow] = React.useState(true);

    if (show === false) {
        // If false, the modal disappears
        return null;
    }
    return createPortal(
        <div style={styleModal}>
            <div>
                <h4>{"Name Bank"}</h4>
                <div>
                    <p>{"Information bank"}</p>
                </div>
                <div>
                    {/* on Click, we put in false (the show) with setShow */}
                    <Button value={"Close"} onClick={() => setShow(false)} />
                </div>
            </div>
        </div>,
        document.querySelector("#modal-container"),
    );
};

export default Modal;

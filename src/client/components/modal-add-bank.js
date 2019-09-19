import * as React from "react";
import {createPortal} from "react-dom";
import Button from "./button";

const styleModalAdd = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "start",
    alignContent: "center",
    backgroundColor: "#fff",
    width: "30%",
    height: "50%",
    zIndex: "10000",
    position: "absolute",
    top: "5%",
    left: "5%",
    border: "20px solid rgba(0, 0, 0, 0.3)",
    backgroundClip: "padding-box",
    borderRadius: "1%",
    paddingLeft: "15px",
    paddingRight: "5px",
    paddingBottom: "10px",
};

const ModalAdd = ({onClose}) => {
    // Used to tell react to observe this variable that changes
    const [show, setShow] = React.useState(true);

    if (show === false) {
        // If false, the modal disappears
        return null;
    }
    return createPortal(
        <div style={styleModalAdd}>
            <p>{"hellooo"}</p>
            <div>
                <Button
                    value={"close"}
                    onClick={() => {
                        setShow(false);
                        onClose();
                    }}
                />
            </div>
        </div>,
        document.querySelector("#modal-add-bank"),
    );
};

export default ModalAdd;

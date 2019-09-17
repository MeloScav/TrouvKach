import React from "react";

const containerButton = {
    display: "flex",
    justifyContent: "flex-end",
};

function Button(props) {
    return (
        <div style={containerButton}>
            <button style={props.style} type={"button"} onClick={props.onClick}>
                {props.value}
            </button>
        </div>
    );
}

export default Button;

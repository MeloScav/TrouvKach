import React from "react";

function Button(props) {
    return (
        <button style={props.style} type={"button"}>
            {props.value}
        </button>
    );
}

export default Button;

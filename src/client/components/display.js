/* eslint-disable react/no-multi-comp */
import * as React from "react";

class Display extends React.Component {
    constructor(props) {
        super(props);
        this.handleDisplayMap = this.handleDisplayMap.bind(this);
        this.handleDisplayAtm = this.handleDisplayAtm.bind(this);
        this.state = {showAtm: false};
    }

    handleDisplayMap() {
        this.setState({showAtm: true});
    }

    handleDisplayAtm() {
        this.setState({showAtm: false});
    }

    render() {
        const showAtm = this.state.showAtm;
        let button;

        if (showAtm) {
            button = <MapButton onClick={this.handleDisplayAtm} />;
        } else {
            button = <AtmButton onClick={this.handleDisplayMap} />;
        }

        return (
            <div>
                <Main showAtm={showAtm} />
                {button}
            </div>
        );
    }
}

function Main(props) {
    const showAtm = props.showAtm;

    // display ATM.
    if (showAtm) {
        return <h1>{"Modal for the ATM"}</h1>;
    }

    // display MAP
    return <h1>{"Modal for the Map."}</h1>;
}

function AtmButton(props) {
    return (
        <button type={"button"} onClick={props.onClick}>
            {"ATM"}
        </button>
    );
}

function MapButton(props) {
    return (
        <button type={"button"} onClick={props.onClick}>
            {"MAP"}
        </button>
    );
}

export default Display;

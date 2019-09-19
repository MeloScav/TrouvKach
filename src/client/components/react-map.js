import * as React from "react";
import {Map, TileLayer} from "react-leaflet";
import ReactMarker from "./react-marker";
import Button from "./button";
import AddBank from "./assets/bank.png";
import ModalAddBank from "./modal-add-bank";

// Style button add bank
const styleButtonAdd = {
    zIndex: "1000",
    position: "absolute",
    top: "5%",
    left: "5%",
    backgroundColor: "rgb(79,179,218)",
    borderColor: "rgb(115,210,222)",
    width: "150px",
    height: "30px",
};

// LIEGE
const position = [50.6326, 5.5797];
// Bruxelle
const position2 = [50.85045, 4.34878];

const ReactMap = () => {
    // Used to tell react to observe this variable that changes
    const [show, setShow] = React.useState(false);
    // In the "if", we need a function "onClose"
    // which allows the return to the initial value of the show
    if (show === true) {
        return <ModalAddBank onClose={() => setShow(false)} />;
    }
    return (
        <div>
            <Map center={position} zoom={16.5} zoomControl={false}>
                <TileLayer
                    url={"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}
                    attribution={
                        'Map data &copy;, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>'
                    }
                />
                <ReactMarker position={position} title={"Liege"} />
                <ReactMarker position={position2} title={"Bxl"} />
            </Map>
            <Button
                class={"buttonAdd"}
                style={styleButtonAdd}
                value={"New bank"}
                img={AddBank}
                alt={"Add bank"}
                onClick={() => setShow(true)}
            />
        </div>
    );
};

export default ReactMap;

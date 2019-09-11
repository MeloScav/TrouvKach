import * as React from "react";

function hello() {
    return "hello";
}

const Greeting = () => <h1>{hello()}</h1>;

export default Greeting;

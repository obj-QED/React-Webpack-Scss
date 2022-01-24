import React from "react";
import { render } from "react-dom";

// PAGE
import Navigation from "./components/Navigation";

const IndexPage = () => (
    <React.Fragment>
    <Navigation />
    </React.Fragment>
);

render(<IndexPage />, document.getElementById("root"));
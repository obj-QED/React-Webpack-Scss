import React from "react";
import ReactDOM from 'react-dom';

// PAGE
import Navigation from "./components/Navigation";
const rootElement = document.getElementById("root");

const App = () => {
    return (
        <Navigation />
    );
};

ReactDOM.render(<App />, rootElement);
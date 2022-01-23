import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import classNames from 'classnames';
import Navbar from './components/Nav';

// Layout
import { Layout } from "./components/Layout";

// PAGE
import Home from "./pages/Home/HomePage";
import NotFound from "./template/404";


const Navigation = () => (
    <Layout>
        <React.StrictMode>
            <Router render={({ location }) => {
                if (location.pathname !== "/") return <Navbar />;
            }}>
                <Routes>
                    <Route exact={true} path="/" element={<Home />} />
                    <Route exaxt path="/404" element={<NotFound />} />
                    <Route exaxt path="*" element={<NotFound />} />
                </Routes>
            </Router >
        </React.StrictMode>
    </Layout>
);

render(<Navigation />, document.getElementById("root"));
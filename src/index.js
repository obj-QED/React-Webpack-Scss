import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Layout
import { Layout } from "./components/Layout";

// STYLE
import './assets/style/index.scss';
// PAGE
import Home from "./pages/Home/HomePage";
import NotFound from "./template/404";

const Navigation = () => (
    <BrowserRouter>
        <div className={`pages ${window.location.pathname.split('/')[1]}`}>
            <Routes>
                <Route exact={true} path="/" element={ <Home />} />
                <Route exaxt path="/404" element={ <NotFound />} />
                <Route exaxt path="*" element={ <NotFound />} />
            </Routes>
        </div>
    </BrowserRouter>
);

render(
    <Layout>
        <Navigation />
    </Layout>,
    document.getElementById("root")
);
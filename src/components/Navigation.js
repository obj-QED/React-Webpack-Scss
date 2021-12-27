import React from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom'
import NotFoundPage from '../template/404.js';


export default class Navigation extends React.Component {
    render(){
        return(
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={HomePage} />
                    <Route path="*" component={NotFoundPage} />
                </Switch>
            </BrowserRouter>
        )
    }
}
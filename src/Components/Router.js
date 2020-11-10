import React from "react";
import { HashRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import Home from "Routes/Home";
import Search from "Routes/Search";
import Header from "Components/Header";

export default () => (
    <Router>
        <>
        <Route path="/" exact component={Home} />
        <Route path="/search" component= {Search} />
        </>
    </Router>
);
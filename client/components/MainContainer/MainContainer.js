import React from "react";
import "./styles.css";

// COMPONENTS //
import Navigation from "./Navigation/Navigation.js";
import Dashboard from "./Dashboard/Dashboard";
const MainContainer = () => {
    return (
        <div className="container">
            <Navigation />
            <Dashboard />
            {/* <LoanInformation /> */}
        </div>
    )
}

export default MainContainer;
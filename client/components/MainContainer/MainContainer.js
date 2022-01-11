import React from "react";
import "./styles.css";

// COMPONENTS //
import Navigation from "./Navigation/Navigation.js";
import Dashboard from "./Dashboard/Dashboard";
import LoanInformation from "./LoanInformation/LoanInformation";

const MainContainer = () => {
    return (
        <div className="main-container">
            <Navigation />
            <div className="information-container">
                <Dashboard />
                <LoanInformation />
            </div>
        </div>
    )
}

export default MainContainer;
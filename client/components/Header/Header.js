import React from 'react';
import './styles.css';

const Header = () => {
    return (
        <div className="container">
            <div id="logo">Logo Icon</div>
            <div id="optionsContainer">
                <div>Notifications Icon</div>
                <div>Messages Icon</div>
                <div>Logout Icon</div>
            </div>
        </div>
    )
}

export default Header;
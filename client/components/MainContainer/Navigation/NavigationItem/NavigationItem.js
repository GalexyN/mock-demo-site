import React from 'react'
import './styles.css';

const NavigationItem = ({title}) => {
    return (
        <div className="navigationItem">
            {title}
        </div>
    )
}

export default NavigationItem;
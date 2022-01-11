import React from 'react';
import './styles.css';

const DashboardItem = ({ item }) => {
    return (
        <div className="dashboard-item">
            <div className="dashboard-item-header">{item.title}</div>
            <div className="dashboard-item-value">{item.value}</div>
        </div>
    )
}

export default DashboardItem;
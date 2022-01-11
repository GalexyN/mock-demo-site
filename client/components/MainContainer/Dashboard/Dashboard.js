import React from 'react';
import './styles.css';
import { dashboardItems } from './dashboardItems';

// COMPONENTS //
import DashboardItem from './DashboardItem/DashboardItem'
const Dashboard = () => {
    return (
        <div className="dashboard">
            {dashboardItems.map(item => (<DashboardItem key={item.id} item={item} />))}
        </div>
    )
}

export default Dashboard;
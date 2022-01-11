import React from 'react'
import './styles.css';
import { navigationItems } from './navigationItems';

// COMPONENTS //
import NavigationItem from './NavigationItem/NavigationItem';

const Navigation = () => {
    return (
        <div className="navigation">
            {navigationItems.map(item => (<NavigationItem key={item.id} title={item.title} />))}
        </div>
    )
}

export default Navigation;
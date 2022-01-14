import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import VerifyIQ from '@informed-iq/verify-iq-sdk';

// COMPONENTS //
import Dashboard from './dashboard/Dashboard'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            "test": "test"
        }
    }

    render() {
        return (
            <div>
                <Dashboard />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
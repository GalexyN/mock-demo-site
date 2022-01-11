import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import VerifyIQ from '@informed-iq/verify-iq-sdk';

// COMPONENTS //
import Form from './components/Form/Form';
import Header from './components/Header/Header';
import MainContainer from './components/MainContainer/MainContainer';

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
                <Header />
                <MainContainer />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
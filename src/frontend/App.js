import React, { Component } from 'react';
import Navbar from './components/_Navbar';
import RouterContent from './components/_Router';
import { Footer } from './components/_Footer';
import './styles/app.scss';

class App extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <RouterContent />
                <Footer />
            </div>
        );
    }
}

export default App;

import React, { Component } from 'react';
import Navbar from './components/Navbar';
import RouterContent from './components/Router';
import Footer from './components/Footer';

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

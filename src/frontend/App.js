import React, { Component } from 'react';
import Navbar from './components/Navbar'
import Content from './components/Content'
import Footer from "./components/Footer";
class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Content />
        <Footer />
      </div>
    );
  }
}

export default App;
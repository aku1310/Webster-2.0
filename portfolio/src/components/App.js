import React, { Component } from 'react';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';

export class App extends Component {
  render() {
    return (
    <>
        <Header />
        <Body />
        <Footer />
    </>
    )
  };
}

export default App;
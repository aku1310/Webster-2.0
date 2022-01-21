import React, { Component } from 'react';

class AboutPage extends Component {
  render() {
    return (
        <div>
            <div className = 'row'>
                <div className='col-md-4'>
                    <h1>John</h1>
                </div>
            </div>
            <div className = 'row'>
                <div className='col-md-4'>
                    <h1>Doe</h1>
                </div>
                <div className='col-md-8 text-center'>
                    <img src="/profile-img.gif" alt = 'profile' ></img>
                </div>
            </div>
            <div className = 'row'>
                <div className='col-md-4'>
                    <p>Lorem ipsum dolor sit amet</p>
                </div>
            </div>
            <div className = 'row'>
                <div className='col-md-4'>
                    <p>Consectetur adipisicing elit.</p>
                </div>
            </div>
        </div>
    )
  }
}

export default AboutPage;

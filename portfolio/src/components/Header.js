import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div id = "header">
        <nav>
          <a href = "#about-page">
            <div className = "nav-circle">
              <div className = "circle inner-circle"></div>
              <text className = "description">About</text>
            </div>
          </a>
          <a href = "#experience-page">
            <div className = "nav-circle">
              <div className = "circle inner-circle"></div>
              <text className = "description">Experience</text>
            </div>
          </a>
          <a href = "#edu-page">
            <div className = "nav-circle">
              <div className = "circle inner-circle"></div>
              <text className = "description">Education</text>
            </div>
          </a>
          <a href = "#project-page">
            <div className = "nav-circle">
              <div className = "circle inner-circle"></div>
              <text className = "description">Projects</text>
            </div>
            </a>
            <a href = "#contact-page">
            <div className = "nav-circle">
              <div className = "circle inner-circle"></div>
              <text className = "description">Contact</text>
            </div>
            </a>
        </nav>
      </div>
    )
  }
}

export default Header;
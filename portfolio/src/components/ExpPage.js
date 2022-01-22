import React, { Component } from 'react';

class ExpPage extends Component {
  render() {
    return (
        <div className = "page bg-light" id = "experience-page">
            <section id = "exp-heading">
              <h1>Experience</h1>
            </section>
            <section id = "exp-content">
              <div className = "exp">
                <div className = "exp-workplace">
                  LOREM IPSUM
                </div>
                <div className = "exp-details">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam fugiat
                nulla perspiciatis ipsam voluptatem temporibus provident reiciendis.
                </div>
              </div>
              <div className = "exp">
                <div className = "exp-workplace">
                  LOREM IPSUM
                </div>
                <div className = "exp-details">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam fugiat
                nulla perspiciatis ipsam voluptatem temporibus provident reiciendis.
                </div>
              </div>
            </section>
        </div>
    )
  }
}

export default ExpPage;
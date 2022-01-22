import React, { Component } from 'react';

class AboutPage extends Component {
  render() {
    return (
        <div id = 'about-page' className = 'page'>

            <div className = 'about-text'>

            <section className = 'name'>
                <h1 id = 'first-name'>John</h1>
                <h1 id = 'last-name'>Doe</h1>
            </section>

            <section className = 'about'>
                <p>Lorem ipsum dolor sit amet</p> <p>Consectetur adipisicing elit.</p>
                <p>Totam fugiat nulla perspiciatis.</p> <p>Ipsam voluptatem temporibus reiciendis.</p>
            </section>
            </div>

            <aside>
                <img src = "/profile-img.gif" alt = "" className = 'circle' />
            </aside>
        </div>
    )
  }
}

export default AboutPage;

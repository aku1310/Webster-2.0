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
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam fugiat
                nulla perspiciatis ipsam voluptatem temporibus provident reiciendis.
                Magnam, maiores autem? Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, natus.</p>
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

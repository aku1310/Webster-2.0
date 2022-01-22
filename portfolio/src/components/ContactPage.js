import React, { Component } from 'react';

class ContactPage extends Component {
  render() {
    return (
        <div className = 'page' id = 'contact-page'>
          <section className='social'>
          <a href = "https://github.com/" target = "_blank" rel = "noreferrer">
            <img src = "https://cdn-icons-png.flaticon.com/512/25/25231.png" alt = "GitHub logo" />GitHub</a>
          <a href = "https://www.linkedin.com/" target = "_blank" rel = "noreferrer">
            <img src = "https://friconix.com/png/fi-xnsuxl-linkedin.png" alt = "LinkedIn logo" />LinkedIn</a>
          <a href = "https://www.twitter.com/" target = "_blank" rel = "noreferrer">
            <img src = "https://i0.wp.com/openvisualfx.com/wp-content/uploads/2019/10/pnglot.com-twitter-bird-logo-png-139932.png?fit=2186%2C2187&ssl=1" alt = "Twitter logo" />Twitter</a>
          </section>
          <section className='contact-heading'>
            <h1>Contact Me</h1>
          </section>
        </div>
    )
  }
}

export default ContactPage;
import React, { Component } from 'react';

class EduPage extends Component {
  render() {
    return (
        <div className = 'page' id = 'edu-page'>
            <div className = 'edu-text'>
              <div className='edu-block'>
                <section className = 'edu-one'>
                  <h2 className = 'edu-school'>Amity University, Noida</h2>
                  <h4 className = 'edu-duration'>2022-2024</h4>
                  <p className = 'edu-description'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam fugiat
                nulla perspiciatis ipsam voluptatem temporibus provident reiciendis.</p>
                </section>
              </div>
              <div className='edu-block'>
                <section className = 'edu-two'>
                  <h2 className = 'edu-school'>Amity University, Noida</h2>
                  <h4 className = 'edu-duration'>2018-2022</h4>
                  <p className = 'edu-description'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam fugiat
                nulla perspiciatis ipsam voluptatem temporibus provident reiciendis.</p>
                </section>
              </div>
              <div className='edu-block'>
                <section className = 'edu-three'>
                  <h2 className = 'edu-school'>ABC School</h2>
                  <h4 className = 'edu-duration'>2010-2018</h4>
                  <p className = 'edu-description'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam fugiat
                nulla perspiciatis ipsam voluptatem temporibus provident reiciendis.</p>
                </section>
              </div>
            </div>
            <section className = 'edu-heading'>
              <h1>Education</h1>
            </section>
        </div>
    )
  }
}

export default EduPage;

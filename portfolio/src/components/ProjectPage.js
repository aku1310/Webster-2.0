import React, { Component } from 'react';

class ProjectPage extends Component {
  render() {
    return (
        <div className = "page bg-light" id = "project-page">
            <section id = "proj-heading">
              <h1>Projects</h1>
            </section>
            <div id = "projec-tiles">
              <section className = "projec-tile" id = "tile1">
                <div className = "project-ion">
                  <img src = "/projectile-image.png" alt = "project preview" height = "150" width = "250"/>
                </div>
                <div className = "project-title">
                  <h3>Project Lorem</h3>
                </div>
              </section>
              <section className = "projec-tile"  id = "tile2">
                <div className = "project-ion">
                  <img src = "/projectile-image.png" alt = "project preview" height = "150" width = "250"/>
                </div>
                <div className = "project-title">
                  <h3>Project Lorem</h3>
                </div>
              </section>
              <section className = "projec-tile"  id = "tile3">
                <div className = "project-ion">
                  <img src = "/projectile-image.png" alt = "project preview" height = "150" width = "250"/>
                </div>
                <div className = "project-title">
                  <h3>Project Lorem</h3>
                </div>
              </section>
              <section className = "projec-tile"  id = "tile4">
                <div className = "project-ion">
                  <img src = "/projectile-image.png" alt = "project preview" height = "150" width = "250"/>
                </div>
                <div className = "project-title">
                  <h3>Project Lorem</h3>
                </div>
              </section>
            </div>
        </div>
    )
  }
}

export default ProjectPage;
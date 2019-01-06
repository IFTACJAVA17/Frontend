import React, { Component } from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavComponent from './components/nav/nav';
import SidebarComponent from './components/sidebar/sidebar';
import FeaturedContainerComponent from './components/featured-container/featured-container';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavComponent />
        <div className="container">
          <div className="row">
            <div className="col-2">
              <SidebarComponent />
            </div>
            <div className="col">
              <FeaturedContainerComponent />
            </div>
            <div className="col-2">
              <SidebarComponent />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

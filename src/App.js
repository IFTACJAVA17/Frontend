import React, { Component } from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
//import NavComponent from './components/nav/nav';
//import SidebarComponent from './components/sidebar/sidebar';
//import FeaturedContainerComponent from './components/featuredContainer/featuredContainer';
//import GamesContainerComponent from './components/gamesContainer/gamesContainer';
//import MockComponent from './components/mockComponent/mockComponent';
import AppRouter from './components/reduxTestComponent/router';
import { connect } from 'react-redux';
import { fetchUser} from './redux/actions'

class App extends Component {

  componentWillMount() {
    this.props.fetchUser();
  }

  render(){
    return <AppRouter />
  }
  /*
  render() {
    return (
      <div className="App">
        <NavComponent />
        <div className="container">
          <div className="row">
            <div className="col">
              <SidebarComponent>
                <MockComponent header="Tournaments"/>
                <MockComponent header="Score" />
              </SidebarComponent>
            </div>
            <div className="col-7">
              <FeaturedContainerComponent text="Featured Games" />
              <GamesContainerComponent text="Games overview" />
            </div>
            <div className="col">
            <SidebarComponent>
            <MockComponent header="Friends"/>
            <MockComponent header="Messages" />
          </SidebarComponent>
            </div>
          </div>
        </div>
      </div>
    );
  } 
  */
}

export default connect(null, { fetchUser })(App);
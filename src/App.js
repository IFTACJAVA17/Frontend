import React, { Component } from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavComponent from './components/nav/nav';
import SidebarComponent from './components/sidebar/sidebar';
import FeaturedContainerComponent from './components/featuredContainer/featuredContainer';
import GamesContainerComponent from './components/gamesContainer/gamesContainer';
import MockComponent from './components/mockComponent/mockComponent';
import FriendList from './components/friendlist-component/friendlist';
import Highscore from './components/highscore/highscore.component';
import TournamentList from './components/tournament-list-component/tournament-list';

class App extends Component {

  render() {
    return (
      <div className="App">
        <NavComponent />
        <div className="container">
          <div className="row">
            <div className="col">
              <SidebarComponent>
                <TournamentList header="Tournaments" />
                <MockComponent header="Score" />
              </SidebarComponent>
            </div>
            <div className="col-7">
              <FeaturedContainerComponent text="Featured Games" />
              <GamesContainerComponent text="Games overview" />
            </div>
            <div className="col">
            <SidebarComponent>
            <FriendList header="Friendzzz"/>
            <MockComponent header="Messages" />
          </SidebarComponent>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
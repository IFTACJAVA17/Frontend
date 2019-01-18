import React, { Component } from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavComponent from './components/nav/nav';
import SidebarComponent from './components/sidebar/sidebar';
import GamesContainerComponent from './components/gamesContainer/gamesContainer';
//import MockComponent from './components/mockComponent/mockComponent';
import GameLayoutComponent from './components/gamelayoutComponent/gameLayout.component';
import FriendList from './components/friendlist-component/friendlist';
import Highscore from './components/highscore/highscore.component';
import TournamentList from './components/tournament-list-component/tournament-list';
import FeaturedComponent from './components/featuredComponent/featured.component';
import { connect } from 'react-redux';
import { fetchUser } from './redux/actions';
import gameLibraryComponent from './components/gamelibraryComponent/gamelibrary.component';
import Chat from './components/chat-component/chat';

class App extends Component {

  componentWillMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div className="App">
        <NavComponent />
        <div className="container">
          <div className="row">
            <div className="col">
              <SidebarComponent>
                <TournamentList header="Tournaments" />
                <Highscore />
              </SidebarComponent>
            </div>
            <div className="col-7">
              <FeaturedComponent />
              <GamesContainerComponent text="Games overview" />
              <gameLibraryComponent></gameLibraryComponent>
            </div>
            <div className="col">
            <SidebarComponent>
            <FriendList header="Friendzzz"/>
            <Chat header="Messagezzz" />
          </SidebarComponent>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null, { fetchUser })(App);
import React, { Component } from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavComponent from './components/nav/nav';
import SidebarComponent from './components/sidebar/sidebar';
import GamesContainerComponent from './components/gamesContainer/gamesContainer';
//import MockComponent from './components/mockComponent/mockComponent';
import FriendsComponent from './components/friendscomponent/friendscomponent';
import Highscore from './components/highscore/highscore.component';
import TournamentList from './components/tournament-list-component/tournament-list';
import FeaturedComponent from './components/featuredComponent/featured.component';
import { connect } from 'react-redux';
import { fetchUser } from './redux/actions';
import Chat from './components/chat-component/chat';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUser, faUserPlus, faUserMinus, faCircle } from '@fortawesome/free-solid-svg-icons'

library.add(faUser, faUserPlus, faUserMinus, faCircle);

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
            </div>
            <div className="col">
              <SidebarComponent>
                <FriendsComponent />
                <Chat />
              </SidebarComponent>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null, { fetchUser })(App);
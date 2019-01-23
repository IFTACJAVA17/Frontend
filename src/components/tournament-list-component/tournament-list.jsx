import React from 'react';
import Tournament from '../tournament-component/tournament';
import './tournament-list.scss';
import TournamentsData from './tournament-mock.json';
import 'react-perfect-scrollbar/dist/css/styles.css';
import PerfectScrollbar from'react-perfect-scrollbar';

function TournamentList(props) {
    const tournaments = TournamentsData.map((d) => <Tournament key={d.id} tournament={d} />)

    return (
        <div className='tournament-container'>
            <div className="header">
                <h5>{props.header}</h5>
            </div>
        <PerfectScrollbar>
            {tournaments}
        </PerfectScrollbar>
        </div>
    )
}

export default TournamentList;
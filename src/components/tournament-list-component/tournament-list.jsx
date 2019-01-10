import React from 'react';
import Tournament from '../tournament-component/tournament';
import './tournament-list.scss';
import TournamentsData from './tournament-mock.json';

function TournamentList(props) {
    const tournaments = TournamentsData.map((d) => <Tournament key={d.id} tournament={d} />)

    return (
        <div className='tournament-container'>
            <div className="header">
                <h5>{props.header}</h5>
            </div>
            {tournaments}
        </div>
    )
}

export default TournamentList;
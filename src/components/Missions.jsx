import React from 'react';
import Title from './Title';
import MissionCard from './MissionCard';
import missions from '../data/missions';

class Missions extends React.Component {
  render() {
    return (
      <main>
        <div data-testid="missions">
          <Title headline="Missões" />
        </div>
        {
          missions.map((missoes, i) => (
            <MissionCard
              key={ i }
              name={ missoes.name }
              year={ missoes.year }
              country={ missoes.country }
              destination={ missoes.destination }
            />
          ))
        }
      </main>
    );
  }
}

export default Missions;

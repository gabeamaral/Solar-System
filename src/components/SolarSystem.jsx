import React from 'react';
import Title from './Title';
import PlanetCard from './PlanetCard';
import Planets from '../data/planets';

class SolarSystem extends React.Component {
  render() {
    return (
      <main>
        <div data-testid="solar-system">
          <Title headline="Planetas" />
        </div>
        <section>
          {
            Planets.map((planets, i) => (
              <PlanetCard
                key={ i }
                planetName={ planets.name }
                planetImage={ planets.image }
              />
            ))
          }
        </section>
      </main>
    );
  }
}

export default SolarSystem;

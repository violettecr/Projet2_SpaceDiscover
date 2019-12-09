import React from 'react';
import Planets from './Components/Planets';

// import sun from './Components/planets-textures/2k_sun.jpg';
import mercury from './Components/planets-textures/2k_mercury.jpg';
import venus from './Components/planets-textures/2k_venus_surface.jpg';
import earth from './Components/planets-textures/2k_earth_daymap.jpg';
import mars from './Components/planets-textures/2k_mars.jpg';
import jupiter from './Components/planets-textures/2k_jupiter.jpg';
import saturn from './Components/planets-textures/2k_saturn.jpg';
import uranus from './Components/planets-textures/2k_uranus.jpg';
import neptune from './Components/planets-textures/2k_neptune.jpg';

function App() {
  return <Planets texture={saturn} />
}

export default App;

// return <Planets texture={earth} />
// return <Sun />
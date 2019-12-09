import React from 'react';
import { Switch, Route } from 'react-router-dom';
import SolarSystem from './Components/SolarSystem/SolarSystem';
import Gallery from './Components/Gallery/Gallery';
import PagePlanet from './Components/PagePlanet/PagePlanet';
import Weather from './Components/Weather/Weather';
import NavBar from './Components/Navbar/NavBar';
import HomePage from './Components/HomePage/HomePage';
import Footer from './Components/Footer/Footer';
import './App.css';

class App extends React.Component {

  render(){
    return(
      <div className="App">
          <NavBar/>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/weather" component={Weather} />
            <Route path="/gallery" component={Gallery} />
            <Route exact path="/solarsystem" component={SolarSystem} />
            <Route path="/:name" component={PagePlanet} />
          </Switch>  
        <Footer />
      </div>
    );
  };
}

export default App;
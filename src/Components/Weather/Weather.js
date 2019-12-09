import React from 'react';
import './Weather.css';
import axios from 'axios';


function Sol(props) {
  
  let tmin, tmax = 0;

  if(props.isCelsius){
    tmin = ((props.tempMin - 32) * (5 / 9)).toFixed(2);
    tmax = ((props.tempMax - 32) * (5 / 9)).toFixed(2);
  } else {
    tmin = props.tempMin;
    tmax = props.tempMax;
  }

  return (
    <div className="OneSol">
      <h3>{'Sol ' + props.sol}</h3>
      <p>Min. {tmin}{props.isCelsius ? ' °C' : ' °F'}</p>
      <p>Max. {tmax}{props.isCelsius ? ' °C' : ' °F'}</p>
    </div>
  );
}

class Weather extends React.Component {
  constructor() {
    super();
    this.state = {
      sols: [],
      celsius: false
    }
  }

  handleTempChange = () => {
    this.setState({
      celsius: !this.state.celsius,
    });
  }

  componentDidMount = () => {
    axios('https://api.nasa.gov/insight_weather/?api_key=N5YZqHEYzc4TmysrLd88ZIScz4dqsZNGuH8MA7Lw&feedtype=json&ver=1.0')
    .then((result) => {
      let solsKeys = result.data.sol_keys // array values
      let sols = []
      solsKeys.map(sol => {
        if (result.data[sol].AT) {
          sols = [...sols, {
            tMin: result.data[sol].AT.mn.toFixed(2),
            tMax: result.data[sol].AT.mx.toFixed(2),
            solId: sol
          }];
        } else {
          sols = [...sols, {
            tMin: 'N/A',
            tMax: 'N/A',
            solId: sol 
          }];
        };
      })
      this.setState({
        sols: sols
      })
      console.log(this.state.sols);
    })
  }

  render(){
    return (
      <div className="container-weather">
        <div className="Page_Weather">
          <p className="TempChoice"><span className={this.state.celsius ? "active" : ""} onClick={this.handleTempChange}>°C</span> | <span className={this.state.celsius ? "" : "active"} onClick={this.handleTempChange}>°F</span></p>
          <div className="ActualSol">
            <h2>MARS</h2>
            {
              this.state.sols.length > 0 ? <Sol sol={this.state.sols[0].solId} tempMax={this.state.sols[0].tMax} tempMin={this.state.sols[0].tMin} isCelsius={this.state.celsius} />
              : <p>loading</p>
            }        
          </div>
          <div className="Other_Sols">
            {this.state.sols.map((sol, index) => {
              if (index != 0){
                return <Sol key={index} sol={sol.solId} tempMin={sol.tMin} tempMax={sol.tMax} isCelsius={this.state.celsius}/> 
              }
            })}
          </div>
        </div>
      </div>
    );
  }

}

export default Weather;
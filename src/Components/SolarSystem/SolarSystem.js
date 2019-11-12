import React from 'react';

class SolarSystem extends React.Component {

  render(){
    return(
      <div>
        <iframe id="result" width='100%' height='800px' src="http://www.southdownsas.org.uk/Solar%20System/index.html" sandbox="allow-forms allow-modals allow-pointer-lock allow-popups allow-presentation allow-same-origin allow-scripts" allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media" allowtransparency="true" allowpaymentrequest="true" allowFullScreen={true} class="result-iframe"></iframe>
      </div>
    );
  }
}

export default SolarSystem;
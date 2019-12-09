import React from 'react';
import BannerHome from './Section/BannerHome';
import SectionFirstPage from './Section/SectionFirstPage';
import SectionThirdPage from './Section/SectionThirdPage';
import SectionSecondPage from './Section/SectionSecondPage';

import './HomePage.css';

class HomePage extends React.Component {
	render(){
		return (
			<div id="Page_index">
				<div className="container"> 
					<BannerHome/>
					<SectionFirstPage/>
					<SectionSecondPage/>
					<SectionThirdPage/>
				</div>
			</div>
		);
	}  
}
  
export default HomePage;

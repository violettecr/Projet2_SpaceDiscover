import React from 'react';
import BannerHome from './Section/BannerHome';
import SectionFirstPage from './Section/SectionFirstPage';
import SectionSecondPage from './Section/SectionSecondPage';

import './HomePage.css';

class HomePage extends React.Component {
	render(){
		return (
			<div id="Page_index">
				<section className="ctn_big_banner">
					{/* <h2>SPACE DISCOVER</h2> */}
				</section>
				<div className="container"> 
					<BannerHome/>
					<SectionFirstPage/>
					<SectionSecondPage/>
					<SectionFirstPage/>
				</div>
			</div>
		);
	}  
}
  
export default HomePage;

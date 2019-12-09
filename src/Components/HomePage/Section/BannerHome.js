import React from 'react';
import spaceDiscoverAnimation from '../../videos/intro.webm';

class BannerHome extends React.Component {
	render(){
		return (
			<section className="ctn_big_banner">
				<video src={spaceDiscoverAnimation} autoplay="true">Video intro</video>
			</section>
		);
	}  
}

export default BannerHome;
import React from 'react';
import { Link } from 'react-router-dom';

class SectionThirdPage extends React.Component {
	render(){
		return (
			<section className="ctn_section_index">
				<div className="ctn_txt_img">
					<img src="http://pngimg.com/uploads/astronaut/astronaut_PNG69.png" alt=""/>
				</div>
				<div className="ctn_txt">
					<div className="ctn_item_top">
						<div>
							<p>00.7</p>
							<span></span>
							<p>2.21</p>
						</div>
					</div>
					<h3>Solar System</h3>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
					<Link to="/solarsystem" className="btn">Go to</Link>
				</div>
			</section>
		);
	}
  
}
  
export default SectionThirdPage;
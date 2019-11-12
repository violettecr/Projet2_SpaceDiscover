import React from 'react';

class SectionFirstPage extends React.Component {

	render(){
		return (

			<section className="ctn_section_index">
				<div className="ctn_txt_img">
					<img src="http://pngimg.com/uploads/astronaut/astronaut_PNG69.png" alt=""/>
				</div>
				<div className="ctn_txt">
					<div className="ctn_item_top">
						<div>
							<p>03</p>
							<span></span>
							<p>03</p>
						</div>
					</div>
					<h3>Je suis un titre</h3>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
					<a href="#" className="btn">Go to</a>
				</div>
			</section>
		);
	}
  
  }
  
  export default SectionFirstPage;
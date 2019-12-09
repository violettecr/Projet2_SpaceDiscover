import React from "react";
import axios from 'axios';
import './Gallery.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

class Gallery extends React.Component {
  constructor(props) {
    super();
    this.state = {
      image: [],
      title: [],
      currentPage: 1
    }
  }

  componentDidMount = () => {
    this.loadingNextPage()
    // Detect when scrolled to bottom.
    window.addEventListener("scroll", (event) => {
      if (Math.ceil(window.innerHeight + window.scrollY) >= document.body.offsetHeight) 
        {this.loadingNextPage()}
    });
  }

  loadingNextPage = () => {
    axios(`https://images-api.nasa.gov/search?q=images&media_type=image&page=${this.state.currentPage}`)
      .then((result) => {
        result.data.collection.items.forEach((item) => {
          this.setState({
            image: [...this.state.image, item.links[0].href],
            title: [...this.state.title, item.data[0].title],
          });
        })
        const NextPage = this.state.currentPage + 1;
        this.setState({ currentPage: NextPage });
      });
  }

  render() {
    return (
      <div id="PageGallery">
        {
          this.state.image.map((picture, index) => {
            return ((index),
              <div id="structure">
                <LazyLoadImage
                  src={picture}
                  effect="blur"
                />
                <div id="title">
                  <p>{this.state.title[index]}</p>
                </div>
              </div>
            )
          })
        }
      </div>
    )
  }
}

export default Gallery;
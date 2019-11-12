//RESTE A FAIRE :
// - lazyLoading fonctionnel : voir pour un effet de chargement des photos
// - fonction infiniteScroll
// - faire un appel à l'API (axios) quand le lazyLoading atteint les 100 images chargées
// - fetch autres pages () de l'API (affichage limité à 100 images par page actuellement)

import React from 'react';
import axios from 'axios';
import './Gallery.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';


class Gallery extends React.Component{
 constructor(props) {
   super();
   this.state = {
     image: [],
     title: [],
     currentPage: 1,
   }
 }

 componentDidMount = () => {
    axios(`https://images-api.nasa.gov/search?q=images&media_type=image&page=${this.state.currentPage}`)
    .then((result) => {
        const galleryHref = result.data.collection.items.map((item) => {  //récupère adresses des images et map (pour les --href--)
          return item.links[0].href;
        });
        const galleryTitles = result.data.collection.items.map((title) => { //récupère les titres et map (pour les --title--)
          return title.data[0].title;
        });

        this.setState({
        image: galleryHref,
        title: galleryTitles,
      })
    })
  }

  render () {
    return ( //"id=PageGallery" ira à la suite de className="body" une fois qu'elle sera créée.
      <div id="PageGallery"> 
        {
          this.state.image.map((picture, index) => {
            return ((index),
            <div id="structure">
              <LazyLoadImage
                src={picture}
                width={400}
                height={400}
                effect="blur"
              />
              <div id="title">
                <p>{this.state.title[index]}</p>
              </div>
            
            {/*NE PAS SUPPRIMER => IMAGES EN BACKGROUND DE DIV

              <div id="picture" //images en background des div
                style={{backgroundImage: 'url(' + picture + ')'}}>
              </div> */}


            </div>

            )
          })
        }
      </div>
    )
  }
}

export default Gallery;



//NE PAS SUPPRIMER POUR L'INSTANT !
//Version du Render avec les images dans des div
//Version actuelle au dessus : images en background de div
    /*  render () {
        return (
          <div id="container">
            {
              this.state.image.map((picture, index) => {
                return ((index),
                <div id="cadre">
                  <div id="image">
                    <img src={picture} />
                    <p> {this.state.title[index]}</p>
                )
              })
            }
          </div>
        )
      }
    }

    */

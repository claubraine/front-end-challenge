import React, { useEffect, useState } from 'react'

import {

  MDBCarousel,
  MDBCarouselCaption,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBView,
  MDBMask,
  MDBContainer

} from "mdbreact";

import parse from "html-react-parser";

import SectionContainer from "./sectionContainer";

import { getPosts } from '../services/wordpressApi';
//import Pagina404 from "../pages/Pagina404";

import "../pages/CarouselPage.css";

export default function PostCarousel({
  idCategoria
}) {


  let classLink = 'menu';

  const [carousel, setCarousel] = useState([]);
  const [totalPages, setTotalPages] = useState([]);

  const getCarousel = async () => {
    try {
      await getPosts(idCategoria)
        .then((data) => {
          const list = data.json
          setCarousel(list.slice(0, 3))
          setTotalPages(data.totalPages)
        });
    } catch (err) {
      console.log(err)
    }
  };

  useEffect(() => {
    getCarousel(idCategoria)
  }, [])

  if (totalPages == 0) {
    return null
  } else {
    return (

      <SectionContainer>
        <MDBContainer className="pb-5">

          <MDBCarousel
            activeItem={1}
            length={3}
            showControls={true}
            showIndicators={true}
            className="z-depth-1"
            slide
          >
            <MDBCarouselInner>

              {carousel.map((post, index) =>

                <MDBCarouselItem itemId={index + 1} key={index + 1} >
                  <MDBView>
                    <img
                      className="d-block w-100"
                      src={parse(post.yoast_head_json.twitter_image)}                
                      alt="First slide"
                    />
                    <MDBMask overlay="black-light" />
                  </MDBView>
                  <MDBCarouselCaption>
                    
                    <a className= "link"                    
                      href={ "/post/" + parse(post.slug)}
                      rel="noopener noreferrer"
                    ><h3 className="h3-responsive titleLimit" >{parse(post.title.rendered)}</h3></a>
                  </MDBCarouselCaption>
                </MDBCarouselItem>

              )}
            </MDBCarouselInner>
          </MDBCarousel>
        </MDBContainer>
      </SectionContainer>
    );
  }


}

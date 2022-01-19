import React, { useEffect, useState } from 'react'


import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBRow,
  MDBCol,
  MDBNavLink,
  MDBAnimation,
  MDBCardImage

} from "mdbreact";

import parse from "html-react-parser";

import "../pages/PostList.css";

import { getPosts } from '../services/wordpressApi';

export default function PostList({ 
  idCategoria 
}) {

  const [posts, setPosts] = useState([]);

  const getPostsData = async () => {
    try {
      await getPosts(idCategoria)
        .then((data) => {
          const list = data.json;         
          setPosts(list.slice(4));  
        });
    } catch (err) {
      console.log(err)     
    }
  };

  useEffect(() => {
    getPostsData(idCategoria)
  }, [])

  
  return (
    <MDBRow>
      <MDBCol md="12" className="mt-4">
        <MDBRow id="categories">

          {posts.map((post, index) =>

            <MDBCol md="4" key={index} >
              <MDBAnimation reveal type="fadeInLeft">
                <MDBCard cascade className="my-3 grey lighten-4">
                  <MDBCardImage
                    cascade
                    className="img-fluid"
                    src={parse(post.yoast_head_json.twitter_image)}
                  />
                  <MDBCardBody cascade className="text-center">
                    <MDBCardTitle className="titleLimit"><strong>{parse(post.title.rendered)}</strong></MDBCardTitle>                   
                    <MDBNavLink
                      tag="button"
                      to={ "/post/" + parse(post.slug)}  
                      color="mdb-color"
                      className="btn btn-outline-mdb-color btn-sm btn-rounded d-inline" >
                      Leia mais
                    </MDBNavLink>
                  </MDBCardBody>
                </MDBCard>
              </MDBAnimation>
            </MDBCol>
          )}

        </MDBRow>
      </MDBCol>
    </MDBRow>

  );
}
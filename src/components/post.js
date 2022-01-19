import React, { useEffect, useState } from 'react';

import Parser from 'html-react-parser';

import SectionContainer from "./sectionContainer";

import {
  MDBBtn,
  MDBCol,
  MDBRow,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBIcon,
  MDBContainer

} from "mdbreact";

import "../pages/Post.css";

import { getPost } from '../services/wordpressApi';
import PostCategorias from "./postCategorias";

export default function Post(
  { slug }
) {
  const [post, setPost] = useState([]);
  //const [post, setPost] = useState([]);

  const getPostData = async () => {
    try {
      await getPost(slug)
        .then((data) => {
          setPost(data.json);
        });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getPostData()
  }, [])


  return (
    <SectionContainer>

      {post.map((p, index) =>
        <>
          <MDBRow key={index}>
            <MDBCol>
              <SectionContainer className="justify-content-center d-flex">
                <MDBCard reverse style={{ width: "40rem" }}>
                  <MDBCardImage
                    zoom
                    cascade
                    className="img-fluid"
                    src={p['_embedded']['wp:featuredmedia'][0].source_url}
                    waves
                  />
                  <MDBCardBody cascade>
                    <MDBCardTitle>{p.title.rendered}</MDBCardTitle>
                    <MDBCardText>
                      <div>{Parser(p.content.rendered)}</div>
                    </MDBCardText>
                    <div>
                      <MDBBtn color="indigo lighten-2">
                        <MDBIcon icon="hourglass-start" />
                      </MDBBtn>
                      <MDBBtn color="blue lighten-2">
                        <MDBIcon icon="heart" />
                      </MDBBtn>
                      <MDBBtn color="light-blue lighten-2">
                        <MDBIcon icon="user" />
                      </MDBBtn>
                      <MDBBtn color="cyan lighten-2">
                        <MDBIcon icon="twitter" brand />
                      </MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </SectionContainer>
            </MDBCol>

          </MDBRow>
          <MDBRow>
            <MDBContainer>
              <MDBRow>
                <MDBCol md="12" className="mt-4">
                  <PostCategorias />
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </MDBRow>
        </>
      )}

    </SectionContainer>
  );
}
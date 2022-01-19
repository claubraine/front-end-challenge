import React from "react";
import {
  MDBEdgeHeader,
  MDBFreeBird,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBCardBody
} from "mdbreact";

import { useParams } from 'react-router-dom';

import "./HomePage.css";

import PostCarousel from "../components/postCarousel";
import PostList from "../components/postList";
import PostCategorias from "../components/postCategorias";

//const LIMIT = 12;

export default function BlogNavPage() {

  const { id } = useParams();

  return (
    <>
      <MDBEdgeHeader color="indigo darken-3" className="sectionPage" />
      <div className="mt-3 mb-5">
        <MDBFreeBird>
          <MDBRow>
            <MDBCol md="10"
              className="mx-auto float-none white z-depth-1 py-2 px-2">
              <MDBCardBody className="text-center">
                <h2 className="h2-responsive mb-4">
                  <strong className="font-weight-bold">
                    Blog
                  </strong>
                </h2>
                <MDBRow />
              </MDBCardBody>
            </MDBCol>
          </MDBRow>
        </MDBFreeBird>

        <MDBContainer>
          <MDBRow>
            <MDBCol md="12" className="mt-4">
            <PostCarousel idCategoria={id} />
            <PostList idCategoria={id} />
            </MDBCol>
          </MDBRow>
        </MDBContainer>

        <MDBContainer>
          <MDBRow>
            <MDBCol md="12" className="mt-4">
            </MDBCol>
          </MDBRow>
        </MDBContainer>

        <MDBContainer>
          <MDBRow>
            <MDBCol md="12" className="mt-4">
            <PostCategorias />
            </MDBCol>
          </MDBRow>
        </MDBContainer>

      </div>
    </>
  );
}




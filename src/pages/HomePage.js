import React from "react";
import {
  MDBEdgeHeader,
  MDBFreeBird,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBCardBody
} from "mdbreact";
import "./HomePage.css";

import PostCarousel from "../components/postCarousel";
import PostList from "../components/postList";
//import Pagination from "../components/PostPaginacao";
import PostCategorias from "../components/postCategorias";

//const LIMIT = 12;
class HomePage extends React.Component {

  scrollToTop = () => window.scrollTo(0, 0);
  render() {
    return (
      <>
        <MDBEdgeHeader color="indigo darken-3" className="sectionPage" />
        <div className="mt-3 mb-5">
          <MDBFreeBird>
            <MDBRow>
              <MDBCol
                md="10"
                className="mx-auto float-none white z-depth-1 py-2 px-2"
              >
                <MDBCardBody className="text-center">
                  <h2 className="h2-responsive mb-4">
                    <strong className="font-weight-bold">
                      Blog Apiki - Home
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
                <PostCarousel idCategoria={518} />
                <PostList idCategoria={518} />
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
}

export default HomePage;
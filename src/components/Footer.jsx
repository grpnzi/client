import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "mdbreact/dist/css/mdb.css";
import { Link } from "react-router-dom";

export default function App() {
  const estiloFooter = {
    backgroundColor: "#FCE38A",
  };

  return (
    <MDBFooter
      style={estiloFooter}
      className="text-center text-lg-start text-muted pt-3 mt-4"
    >
      <section className="p-4">
        <MDBContainer className="text-center text-md-start mt-2">
          <MDBRow className="mt-2">
            <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4 text-center">
              <Link
                style={{ fontFamily: "Russo One" }}
                className="navbar-brand ml-4 "
                to="/"
              >
                <div className="d-flex flex-column align-items-center">
                  <p
                    style={{ color: "black", fontSize: "24px" }}
                    className="mb-0"
                  >
                    wildXperience
                  </p>
                  <img
                    src={process.env.PUBLIC_URL + "/logo 3.png"}
                    alt="Mi Logo"
                    style={{ width: "80px" }}
                  />
                </div>
              </Link>
            </MDBCol>

            <MDBCol
              md="4"
              lg="2"
              xl="2"
              className="mx-auto mb-4"
              style={{ color: "black" }}
            >
              <h6
                style={{ color: "black" }}
                className="text-uppercase fw-bold mb-4 d-flex justify-content-center"
              >
                Tools
              </h6>
              <p>
                <a
                  href=""
                  className="me-4 m-4 fa-lg d-flex justify-content-center text-reset"
                >
                  <MDBIcon fab icon="node" />
                </a>
              </p>
              <p>
                <a
                  href=""
                  className="me-4 m-4 fa-lg d-flex justify-content-center text-reset"
                >
                  <MDBIcon fab icon="js" />
                </a>
              </p>
              <p>
                <a
                  href=""
                  className="me-4 m-4 fa-lg d-flex justify-content-center text-reset"
                >
                  <MDBIcon fab icon="react" />
                </a>
              </p>
              <p>
                <a
                  href=""
                  className="me-4 m-4 fa-lg text-reset d-flex justify-content-center"
                >
                  <MDBIcon fab icon="envira" />
                </a>
              </p>
            </MDBCol>


            <MDBCol
              md="3"
              lg="2"
              xl="2"
              className="mx-auto mb-4"
              style={{ color: "black" }}
            >
              <h6
                style={{ color: "black" }}
                className="text-uppercase fw-bold mb-4"
              >
                Useful links
              </h6>
              <p>
                <Link
                  to="/search"
                  style={{ fontFamily: "Share", color: "black" }}
                  className="text-reset"
                >
                  Experiences
                </Link>
              </p>
              <p>
                <Link
                  to="https://www.google.com/travel/flights"
                  style={{ fontFamily: "Share", color: "black" }}
                  className="text-reset"
                >
                  Flights
                </Link>
              </p>
              <p>
                <Link
                  to="https://www.booking.com/"
                  style={{ fontFamily: "Share", color: "black" }}
                  className="text-reset"
                >
                  Accommodation
                </Link>
              </p>
            </MDBCol>

            <MDBCol
              md="4"
              lg="3"
              xl="3"
              className="mx-auto mb-4 ml-3 text-center text-md-center"
              style={{ fontFamily: "Share", color: "black" }}
            >
              <h6
                style={{ color: "black" }}
                className="text-uppercase fw-bold mb-4"
              >
                Contact
              </h6>
              <p
                style={{ fontFamily: "Share", color: "black" }}
                className="share-font"
              >
                <MDBIcon icon="home" className="me-3" />
                <Link to={"https://goo.gl/maps/f3kDbB5aWi9x3c1k6"}>
                  Tanzania
                </Link>
              </p>
              <p
                style={{ fontFamily: "Share", color: "black" }}
                className="share-font mx-auto mb-md-0 mb-4"
              >
                <MDBIcon icon="envelope" className="me-3" />
                info@wildXperience.com
              </p>
              <p
                style={{ fontFamily: "Share", color: "black" }}
                className="share-font mx-auto mb-md-0 mb-4 mt-3"
              >
                <MDBIcon icon="phone" className="me-3" />
                (+255) 754 04 21 23
              </p>

              <div className="mt-3 mx-auto mb-md-0 mb-4 ml-3">
                <a href="" className="me-3 text-reset">
                  <MDBIcon style={{ color: "black" }} fab icon="facebook-f" />
                </a>
                <a href="" className="me-3 text-reset">
                  <MDBIcon style={{ color: "black" }} fab icon="twitter" />
                </a>
                <a href="" className="me-3 text-reset">
                  <MDBIcon style={{ color: "black" }} fab icon="instagram" />
                </a>
                <a href="" className="me-3 text-reset">
                  <MDBIcon style={{ color: "black" }} fab icon="linkedin" />
                </a>
                <a href="" className="me-1 text-reset">
                  <MDBIcon style={{ color: "black" }} fab icon="github" />
                </a>
              </div>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div
        className="text-center p-4"
        style={{ backgroundColor: "black", color: "white" }}
      >
        <a className="text-reset fw-bold" href="/">
          <p>&copy; {new Date().getFullYear()} wildXperience</p>
        </a>
      </div>
    </MDBFooter>
  );
}

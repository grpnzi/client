import { Link } from "react-router-dom";
import { CartContext } from "../../context/cart.context";
import { useContext, useState } from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";
import Button from "react-bootstrap/esm/Button";

function Cart() {
  const { cart } = useContext(CartContext)
  const sum = cart.reduce((partialSum, currentItem) => partialSum + currentItem.price, 0);

  return (
    <section className="h-100 h-custom" style={{ backgroundColor: "#eee" }}>
      <MDBContainer className="py-5 h-100 w-100" >
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol lg="12" md="9">
            <MDBCard className="w-100">
              <MDBCardBody className="p-4">
                <MDBRow>
                  <MDBCol lg="6">
                    <MDBTypography tag="h5">
                      <Link to="/">
                        <MDBIcon fas icon="long-arrow-alt-left me-2" /> Continue shopping
                      </Link>
                    </MDBTypography>

                    <hr />

                    <div className="d-flex justify-content-between align-items-center mb-4">
                      <div>
                        <p className="mb-1">Shopping cart</p>
                        <p className="mb-0">You have {cart?.length} items in your cart</p>
                      </div>
                      <div>
                        <p>
                          <span className="text-muted">Sort by:</span>
                          <MDBIcon fas icon="angle-down mt-1" />
                        </p>
                      </div>
                    </div>

                    {cart && cart.map((experience) => {
                      return (
                        <MDBCard className="mb-3 w-100" key={experience._id}>
                          <MDBCardBody className="w-100">
                            <div className="d-flex justify-content-between">
                              <div className="d-flex flex-row align-items-center">
                                <div>
                                  <MDBCardImage
                                    src={experience.imageUrl}
                                    fluid className="rounded-3" style={{ width: "150px" }}
                                    alt={experience.title} />
                                </div>
                                <div className="ms-3">
                                  <MDBTypography tag="h5">
                                    {experience.title}
                                  </MDBTypography>
                                </div>
                              </div>
                              <div className="d-flex flex-row align-items-center">
                                <div style={{ width: "50px" }}>
                                  <MDBTypography tag="h5" className="fw-normal mb-0">
                                    1
                                  </MDBTypography>
                                </div>
                                <div style={{ width: "80px" }}>
                                  <MDBTypography tag="h5" className="mb-0">
                                    ${experience.price}
                                  </MDBTypography>
                                </div>
                                <a href="#!" style={{ color: "#cecece" }}>
                                  <MDBIcon fas icon="trash-alt" />
                                </a>
                              </div>
                            </div>
                          </MDBCardBody>
                        </MDBCard>
                      )
                    })}


                  </MDBCol>

                  <MDBCol lg="6">
                    <MDBCard className="bg-primary text-white rounded-3 w-100">
                      <MDBCardBody className="w-100">
                        <div className="d-flex justify-content-between align-items-center mb-4">
                          <MDBTypography tag="h5" className="mb-0">
                            Card details
                          </MDBTypography>
                        </div>

                        <p className="small">Card type</p>
                        <a href="#!" type="submit" className="text-white">
                          <MDBIcon fab icon="cc-mastercard fa-2x me-2" />
                        </a>
                        <a href="#!" type="submit" className="text-white">
                          <MDBIcon fab icon="cc-visa fa-2x me-2" />
                        </a>
                        <a href="#!" type="submit" className="text-white">
                          <MDBIcon fab icon="cc-amex fa-2x me-2" />
                        </a>
                        <a href="#!" type="submit" className="text-white">
                          <MDBIcon fab icon="cc-paypal fa-2x me-2" />
                        </a>

                        <form className="mt-4">
                          <MDBInput className="mb-4" label="Cardholder's Name" type="text" size="lg"
                            placeholder="Cardholder's Name" contrast />

                          <MDBInput className="mb-4" label="Card Number" type="text" size="lg"
                            minLength="19" maxLength="19" placeholder="1234 5678 9012 3457" contrast />

                          <MDBRow className="mb-4">
                            <MDBCol md="6">
                              <MDBInput className="mb-4" label="Expiration" type="text" size="lg"
                                minLength="7" maxLength="7" placeholder="MM/YYYY" contrast />
                            </MDBCol>
                            <MDBCol md="6">
                              <MDBInput className="mb-4" label="CVV" type="text" size="lg" minLength="3"
                                maxLength="3" placeholder="&#9679;&#9679;&#9679;" contrast />
                            </MDBCol>
                          </MDBRow>
                        </form>

                        <hr />

                        {cart && cart.map((experience) => {
                          return (
                            <div className="d-flex justify-content-between" key={experience._id}>
                              <p className="mb-2">{experience.title}</p>
                              <p className="mb-2">${experience.price}</p>
                            </div>
                          )
                        })
                        }

                        <div className="d-flex justify-content-between">
                          <p className="mb-2">Total(Incl. taxes)</p>
                          <p className="mb-2">${sum}</p>
                        </div>

                        <div className="d-flex justify-content-center align-items-center mt-4 h-100">
                          <Button variant="dark" className="h-100">Purchase</Button>
                        </div>
                      </MDBCardBody>
                    </MDBCard>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
}

export default Cart;
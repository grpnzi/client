import "./AboutDown.css";
import 'bootstrap/dist/css/bootstrap.min.css'
import { MDBAccordion, MDBAccordionItem, MDBIcon} from 'mdb-react-ui-kit';
import { Container, Row, Col, Form, InputGroup, FormControl, Button } from 'react-bootstrap';





function AboutDown() {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 80,
      behavior: 'smooth', // For smooth scrolling
    });
  };

  return (
    <>
      <section className="bg-black p-3">
        <section className="bg-black p-2"> </section>
        <section className="page-section" id="services">
      <Container fluid>
        <h2 style={{ fontFamily: 'Russo One', fontSize: '34px', color: 'white'}} className="text-center mt-3">A</h2>
      </Container>
    </section>
      </section>
      <div className="about-down" id="about">




        <div className="row featurette mt-2">
          <div className="col-md-7">
            <h2 style={{ fontFamily: 'Russo One', fontSize: '25px' }} className="featurette-heading">WildXperience, <span className="text-muted"> Your Gateway to Extraordinary Adventures</span></h2>
            <p style={{ fontFamily: 'Share', fontSize: '20px' }} className="lead">At WildXperience, we are your gateway to a world of extraordinary adventures, rich cultural immersion, and delectable culinary journeys. We understand that when it comes to planning your dream adventures, trust is paramount. We're not just another travel agency; we're a passionate team of seasoned globetrotters with a deep love for exploration.</p>
            <p className="mb-4 mt-4" style={{ fontFamily: 'Russo One', fontSize: '14px' }}>Find the experience that suits you the most!</p>
            <button type="button" onClick={handleScrollToTop} className="text-center btnHook btn btn-sm btn-dark rounded border border-warning mt-3" style={{ width: '160px', maxHeight: '45px', fontFamily: 'Russo One', fontSize: '16px' }}>Explore</button>

          </div>
          <div className="col-md-5">
            <img
              className="featurette-image img-fluid mx-auto"
              data-src="holder.js/500x500/auto"
              alt="500x500"
              style={{ width: '550px', height: '500px' }}
              src="https://images.unsplash.com/photo-1473625247510-8ceb1760943f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2011&q=80"
              data-holder-rendered="true"
            />
          </div>
        </div>


        <br />
        <br />



        <div className="row featurette">
          <div className="col-md-7 order-md-2">
            <h2 style={{ fontFamily: 'Russo One', fontSize: '25px' }} className="featurette-heading">Three Unique Experiences</h2>
            {<ul className="list-down">
              <li className="aboutLi"><strong>Xtreme Adventures:</strong> Seek the adrenaline rush? Our Xtreme experiences are designed to thrill, from scaling towering peaks to diving into the depths of the ocean, pushing boundaries and igniting your sense of adventure.</li>
              <li className="aboutLi"><strong>Cultural Immersion:</strong> We believe the heart of any journey lies in its culture. Delve deep into traditions, history, and vibrant customs through our Cultural experiences. Engage with local communities, participate in ancient rituals, and gain insights that go beyond the surface.</li>
              <li className="aboutLi"><strong>Gastronomic Delights:</strong> Food is a universal language, and our Gastronomic experiences celebrate the world's culinary treasures. Discover a country's soul through its flavors, savoring street food delicacies to fine dining in historic settings, all while uncovering the stories behind each dish.</li>
            </ul>}

          </div>
          <div className="col-md-5">
            <img
              className="featurette-image img-fluid mx-auto"
              data-src="holder.js/500x500/auto"
              alt="500x500"
              style={{ width: '550px', height: '500px' }}
              src="https://images.unsplash.com/photo-1533105079780-92b9be482077?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
              data-holder-rendered="true"
            />
          </div>
        </div>



        <br />
        <br />
        <br />

        <div className="row featurette">
          <div className="col-md-7">
            <h2 style={{ fontFamily: 'Russo One', fontSize: '25px' }} className="featurette-heading">Your Journey, <span className="text-muted"> Our Distinctive Promise.</span></h2>
            <p style={{ fontFamily: 'Share', fontSize: '20px' }} className="lead">Our journey begins with a simple promise: we travel extensively, immersing ourselves in diverse cultures, traversing varied landscapes, and seeking extraordinary experiences. It's this firsthand knowledge that sets us apart. We're not just selling destinations; we're offering a piece of our own wanderlust-infused souls.</p>
          </div>
          <div className="col-md-5">
            <img
              className="featurette-image img-fluid mx-auto"
              data-src="holder.js/500x500/auto"
              alt="500x500"
              style={{ width: '550px', height: '500px' }}
              src="https://images.unsplash.com/photo-1624821558130-b325d7946fc8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              data-holder-rendered="true"
            />          </div>
        </div>

        <br />

        <div>
          <h2 style={{ fontFamily: 'Russo One', fontSize: '25px' }} className="featurette-heading">Your Trusted Partner </h2>
          <p style={{ fontFamily: 'Share', fontSize: '20px' }} className="lead">Why trust WildXperience? Because we're more than a travel agency, we're your partners in crafting experiences that will leave an indelible mark on your heart and soul. Let WildXperience turn your wanderlust into reality; together, we'll embark on the journey of a lifetime, filled with Xtreme thrills, cultural immersion, and gastronomic delights.</p>
        </div>



        <br />

        <p className="float-right"><a href="#">Back to map</a></p>


      </div>
    </>

  );
}

export default AboutDown;

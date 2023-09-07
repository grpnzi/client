import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';

function AboutDown() {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 80,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <section className="bg-black p-3">
        <Container fluid>
          <h2 style={{ fontFamily: 'Russo One', fontSize: '32px', color: 'white' }} className="text-center mt-3">- ABOUT US -</h2>
        </Container>
      </section>

      <section className="bg-black p-2"></section>

      <section className="page-section" id="services"></section>
    

      <div className="about-down" id="about">
        <Row className="mx-1 my-4 p-4">
          <Col md={7} className="my-4">
            <h2 style={{ fontFamily: 'Russo One', fontSize: '25px', wordWrap: 'break-word' }} className="featurette-heading d-md-inline mb-4 mt-4 text-center">WildXperience, <span style={{wordWrap: 'break-word' }} className="text-muted d-md-inline text-break"> Your Gateway to Extraordinary Adventures</span></h2>
            <p style={{ fontFamily: 'Share', fontSize: '20px' }} className="lead mt-4">At WildXperience, we are your gateway to a world of extraordinary adventures, rich cultural immersion, and delectable culinary journeys. We understand that when it comes to planning your dream adventures, trust is paramount. We're not just another travel agency; we're a passionate team of seasoned globetrotters with a deep love for exploration.</p>
            <p className="mb-4 mt-4" style={{ fontFamily: 'Russo One', fontSize: '14px' }}>Find the experience that suits you the most!</p>
            <button type="button" onClick={handleScrollToTop} className="text-left btnHook btn btn-sm btn-dark rounded border border-warning mt-3" style={{ width: '160px', maxHeight: '45px', fontFamily: 'Russo One', fontSize: '16px' }}>Explore</button>
          </Col>
          <Col md={5}>
          <video controls autoplay muted loop class="featurette-image img-fluid mt-4">

  <source src="https://res.cloudinary.com/dfimhqvub/video/upload/v1694096255/naq5ej1icdhksd4vpuj5.mp4" type="video/mp4"/>
</video>

          </Col>
        </Row>

        <Row className="mt-4">
          <Col md={7} className="order-md-2">
            <h2 style={{ fontFamily: 'Russo One', fontSize: '25px', textAlign: 'center' }} className="featurette-heading mt-4 text-left mb-3 pb-5">Three Unique Experiences</h2>
            <ul className="list-unstyled">
              <li className="aboutLi text-left px-5 p-4">
                <strong style={{ fontFamily: 'Russo One', fontSize: '20px', textAlign: 'left' }}>Xtreme Adventures:</strong>
                <p style={{ fontFamily: 'Share', fontSize: '18px', textAlign: 'left' }} className="text-right text-left mt-1">Seek the adrenaline rush? Our Xtreme experiences are designed to thrill, from scaling towering peaks to diving into the depths of the ocean, pushing boundaries and igniting your sense of adventure.</p>
              </li>
              <li className="aboutLi text-left mt-1 px-5 p-4">
                <strong style={{ fontFamily: 'Russo One', fontSize: '20px', textAlign: 'left' }}>Cultural Immersion:</strong>
                <p style={{ fontFamily: 'Share', fontSize: '18px', textAlign: 'left' }} className="text-right text-left">We believe the heart of any journey lies in its culture. Delve deep into traditions, history, and vibrant customs through our Cultural experiences. Engage with local communities, participate in ancient rituals, and gain insights that go beyond the surface.</p>
              </li>
              <li className="aboutLi text-left px-5 p-4">
                <strong style={{ fontFamily: 'Russo One', fontSize: '20px', textAlign: 'left' }}>Gastronomic Delights:</strong>
                <p style={{ fontFamily: 'Share', fontSize: '18px', textAlign: 'left' }} className="text-right text-left">Food is a universal language, and our Gastronomic experiences celebrate the world's culinary treasures. Discover a country's soul through its flavors, savoring street food delicacies to fine dining in historic settings, all while uncovering the stories behind each dish.</p>
              </li>
            </ul>
          </Col>
          

          <Col md={5} className='p-4'>
            <img
              className="featurette-image img-fluid w-800"
              src="https://images.unsplash.com/photo-1533105079780-92b9be482077?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
              alt="Three Unique Experiences"
              
            />
          </Col>
        </Row>

        <Row className="mt-4">
          <Col md={7} className="p-5">
            <h2 style={{ fontFamily: 'Russo One', fontSize: '25px' }} className="featurette-heading my-4 mx-4">Your Journey, <span className="text-muted"> Our Distinctive Promise.</span></h2>
            <p style={{ fontFamily: 'Share', fontSize: '20px' }} className="lead my-4 mx-4">Our journey begins with a simple promise: we travel extensively, immersing ourselves in diverse cultures, traversing varied landscapes, and seeking extraordinary experiences. It's this firsthand knowledge that sets us apart. We're not just selling destinations; we're offering a piece of our own wanderlust-infused souls.</p>
            <button type="button" onClick={handleScrollToTop} className="text-left btnHook btn btn-sm btn-dark rounded border border-warning mt-3 mx-4" style={{ width: '160px', maxHeight: '45px', fontFamily: 'Russo One', fontSize: '16px' }}>Explore</button>
          </Col>
          <Col md={5}>
            <img
              className="featurette-image img-fluid mx-auto mb-5 p-4"
              src="https://images.unsplash.com/photo-1624821558130-b325d7946fc8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt="Your Journey"
            />
          </Col>
        </Row>

        <Row className="mt-4">
          <Col>
            <h2 style={{ fontFamily: 'Russo One', fontSize: '25px', color: 'black' }} className="text-center mt-3 mb-4 mt-4">Your Trusted Partner</h2>
            <section className="bg-black p-4 mt-4">
              <Container fluid>
                <h3 style={{ fontFamily: 'Federo', fontSize: '17px', color: 'white' }} className="lead text-left mt-2">Why trust WildXperience? Because we're more than a travel agency, we're your partners in crafting experiences that will leave an indelible mark on your heart and soul.</h3>
                <h3 style={{fontFamily: 'Federo', fontSize: '17px', color: 'white' }} className="lead text-left mt-2">Let WildXperience turn your wanderlust into reality; together, we'll embark on the journey of a lifetime, filled with Xtreme thrills, cultural immersion, and gastronomic delights.</h3>
              </Container>
            </section>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default AboutDown;

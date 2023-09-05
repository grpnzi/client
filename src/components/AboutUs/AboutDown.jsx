import "./AboutDown.css";
import 'bootstrap/dist/css/bootstrap.min.css';



function AboutDown() {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 80,
      behavior: 'smooth', // For smooth scrolling
    });
  };

  return (
    <div className="about-down" id="about">

      <br />

      <div className="row featurette">
        <div className="col-md-7">
          <h2 className="featurette-heading">WildXperience, <span className="text-muted"> Your Gateway to Extraordinary Adventures.</span></h2>
          <p className="lead">At WildXperience, we are your gateway to a world of extraordinary adventures, rich cultural immersion, and delectable culinary journeys. We understand that when it comes to planning your dream adventures, trust is paramount. We're not just another travel agency; we're a passionate team of seasoned globetrotters with a deep love for exploration.</p>
          <p>Find the experience that suits you the most!.</p>
          <button type="button" onClick={handleScrollToTop} >Explore Destinations</button>
        </div>
        <div className="col-md-5">
          <img
            className="featurette-image img-fluid mx-auto"
            data-src="holder.js/500x500/auto"
            alt="500x500"
            style={{ width: '500px', height: '500px' }}
            src="https://images.unsplash.com/photo-1474452926969-af7bfdb9ca39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80"
            data-holder-rendered="true"
          />          </div>
      </div>


      <hr className="featurette-divider separateBar" />




      <div className="row featurette">
        <div className="col-md-7 order-md-2">
          <h2 className="featurette-heading">Three Unique Experiences</h2>
          <ul className="list-down">
            <li><strong>Xtreme Adventures:</strong> Seek the adrenaline rush? Our Xtreme experiences are designed to thrill, from scaling towering peaks to diving into the depths of the ocean, pushing boundaries and igniting your sense of adventure.</li>
            <li><strong>Cultural Immersion:</strong> We believe the heart of any journey lies in its culture. Delve deep into traditions, history, and vibrant customs through our Cultural experiences. Engage with local communities, participate in ancient rituals, and gain insights that go beyond the surface.</li>
            <li><strong>Gastronomic Delights:</strong> Food is a universal language, and our Gastronomic experiences celebrate the world's culinary treasures. Discover a country's soul through its flavors, savoring street food delicacies to fine dining in historic settings, all while uncovering the stories behind each dish.</li>
          </ul>
          <button type="button" onClick={handleScrollToTop} >Explore Destinations</button>

        </div>
        <img
          className="featurette-image img-fluid mx-auto"
          data-src="holder.js/500x500/auto"
          alt="500x500"
          style={{ width: '500px', height: '500px' }}
          src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22500%22%20height%3D%22500%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20500%20500%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_18a60ecfe47%20text%20%7B%20fill%3A%23AAAAAA%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A25pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_18a60ecfe47%22%3E%3Crect%20width%3D%22500%22%20height%3D%22500%22%20fill%3D%22%23EEEEEE%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22185.125%22%20y%3D%22261.2800006866455%22%3E500x500%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
          data-holder-rendered="true"
        />
      </div>



      <hr className="featurette-divider separateBar" />


      <div className="row featurette">
        <div className="col-md-7">
          <h2 className="featurette-heading">Your Journey, <span className="text-muted"> Our Distinctive Promise.</span></h2>
          <p className="lead">Our journey begins with a simple promise: we travel extensively, immersing ourselves in diverse cultures, traversing varied landscapes, and seeking extraordinary experiences. It's this firsthand knowledge that sets us apart. We're not just selling destinations; we're offering a piece of our own wanderlust-infused souls.</p>
        </div>
        <div className="col-md-5">
          <img
            className="featurette-image img-fluid mx-auto"
            data-src="holder.js/500x500/auto"
            alt="500x500"
            style={{ width: '500px', height: '500px' }}
            src="https://images.unsplash.com/photo-1474452926969-af7bfdb9ca39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80"
            data-holder-rendered="true"
          />          </div>
      </div>


      <br />
      <br />

      <h2 className="featurette-heading">Your Trusted Partner </h2>
      <p className="lead">Why trust WildXperience? Because we're more than a travel agency, we're your partners in crafting experiences that will leave an indelible mark on your heart and soul. Let WildXperience turn your wanderlust into reality; together, we'll embark on the journey of a lifetime, filled with Xtreme thrills, cultural immersion, and gastronomic delights.</p>



      <br />

      <p className="float-right"><a href="#">Back to top</a></p>


    </div>

  );
}

export default AboutDown;

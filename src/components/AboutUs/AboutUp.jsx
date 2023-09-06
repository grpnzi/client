function About() {
    return (


      
      <div className="travel-agency">
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Federo&display=swap');
          .share-font {
            font-family: 'Federo', sans-serif;
          }

        `}
      </style>
        <header>
          <h1 className="mt-3 text-center"style={{ fontFamily: 'Russo One' }}>WildXperience</h1>
        </header>
        <section className="map-section">
          <p className="mt-4 text-center" style={{fontFamily: 'Federo', fontSize: '20px', fontWeight: "bold" }}>Click on the map to choose your destination and start your adventure!</p>
        </section>
      </div>
    );
  }
  
  export default About;
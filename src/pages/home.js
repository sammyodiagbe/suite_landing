import phoneImage from "../assets/mobile_image.svg";

const Home = () => {
  return (
    <div className="home">
      <nav className="Navigation">
        <h1 className="heading_title">Suite</h1>
        <a href="#request_beta">Request Beta Access</a>
      </nav>
      <header className="header-container">
        <section class="action-container">
          <h1 className="header-text">A super solution for your business.</h1>
          <p className="description-text">
            Our marketing and sales automation help you scale your outreach to
            get more deals for your company.
          </p>
          <a href="#request-beta" class="request-beta">
            Request Beta Access
          </a>
        </section>
        <section className="image-container">
          <img src={phoneImage} alt="Mobile app" />
        </section>
        <section className="reviews-container">
          <div className="review">
            <h1 className="review-title">2K+</h1>
            <h3 className="review-sub-title">Companies</h3>
          </div>
          <div className="review">
            <h1 className="review-title">8</h1>
            <h3 className="review-sub-title">Languages</h3>
          </div>
          <div className="review">
            <h1 className="review-title">1.2M</h1>
            <h3 className="review-sub-title">Leads</h3>
          </div>
        </section>
      </header>
    </div>
  );
};

export default Home;

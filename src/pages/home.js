import phoneImage from "../assets/mobile_image.svg";
import pathImage from "../assets/path_image.svg";
import manImage from "../assets/man_image.svg";

const Home = () => {
  const dateYear = new Date().getFullYear();

  return (
    <div className="home">
      <nav className="navigation">
        <h2 className="brand">Suite</h2>
        <a href="#request_beta" className="request-beta">
          Request Beta Access
        </a>
      </nav>
      <header className="header-container">
        <section class="action-container">
          <h1 className="header-text">
            A <b>super solution</b> for your <b>business.</b>{" "}
          </h1>
          <p className="description-text">
            Our marketing and sales automation help you scale your outreach to
            get more deals for your company.
          </p>
          <a href="#request-beta" className="request-beta">
            Request Beta Access
          </a>
        </section>
        <section className="image-container">
          <img src={phoneImage} alt="Mobile app" className="phone-image" />
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
      <div className="cmo-speaks">
        <img src={manImage} alt="CMO speaks" />
        <img src={pathImage} alt="Path arrow" />
        <div className="words-container">
          <h1 className="header-title">It just works.</h1>
          <p className="subtitle"></p>

          <div className="name-position">
            <h3 className="name">jeremy Robinson</h3>
            <h4 className="sub">Cmo Fylo</h4>
          </div>

          <p></p>
        </div>
      </div>
      <footer className="footer">
        <h1 className="brand">Suite</h1>
        <p>&copy;Copyright {dateYear}</p>
      </footer>
    </div>
  );
};

export default Home;

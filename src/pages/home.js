import phoneImage from "../assets/mobile_image.svg";
import ipadImage from "../assets/ipag_phone.svg";
import pathImage from "../assets/path_image.svg";
import manImage from "../assets/man_image.svg";
import facebook from "../assets/facebook_social.svg";
import instagram from "../assets/instagram_social.svg";
import twitter from "../assets/twitter_social.svg";
import pt_1 from "../assets/pt_1.svg";
const Home = () => {
  const dateYear = new Date().getFullYear();

  return (
    <div className="home">
      <nav className="navigation">
        <h1 className="brand">suite</h1>
        <a href="#request_beta" className="request-beta">
          Request Beta Access
        </a>
      </nav>
      <header className="header-container">
        <div className="top-container">
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

            <img src={ipadImage} alt="ipad phone" className="ipad-image" />
          </section>
        </div>

        <section className="reviews-container">
          <div className="review">
            <h1 className="review-title">2K+</h1>
            <h5 className="review-sub-title">Companies</h5>
          </div>
          <div className="review">
            <h1 className="review-title">8</h1>
            <h5 className="review-sub-title">Languages</h5>
          </div>
          <div className="review">
            <h1 className="review-title">1.2M</h1>
            <h5 className="review-sub-title">Leads</h5>
          </div>
        </section>
      </header>
      <div className="cmo-speaks">
        <div className="cmo-container">
          <img src={manImage} alt="CMO speaks" className="cmo" />
        </div>
        <div className="path-container">
          <img src={pathImage} alt="Path arrow" className="arrow" />
        </div>

        <div className="words-container">
          <h1 className="header-title">
            It just <b>works.</b>
          </h1>
          <p className="subtitle">
            "I really like how it is an all-in-one solution that can handle many
            of the tasks that you would normally need seperate tools to do the
            same job. This thing is a miracle worker."
          </p>

          <div className="name-position">
            <h3 className="name">jeremy Robinson</h3>
            <h4 className="sub">Cmo, Fylo</h4>
          </div>

          <p></p>
        </div>
      </div>
      <footer className="footer">
        <h2 className="brand">suite</h2>
        <p>&copy;Copyright - Suite</p>
        <div className="socials">
          <a href="https://facebook.com">
            <img src={facebook} alt="reachout on facebook" />
          </a>
          <a href="https://twitter.com">
            <img src={twitter} alt="reachout on twitter" />
          </a>
          <a href="https://instagram.com">
            <img src={instagram} alt="reaachout on instagram" />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Home;

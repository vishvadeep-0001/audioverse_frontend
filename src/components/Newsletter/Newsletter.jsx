import "../Newsletter/newsletter.css";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Newsletter = () => {
  return (
    <div className="newsletter">
      {/* <img src={newsletterImg} alt="" /> */}

      <div className="newsletter-info">
        <h4 style={{ marginBottom: "5px" }}>NEWSLETTER</h4>
        <h2 className="mb-3">SIGN UP FOR LATEST UPDATES AND OFFERS</h2>

        <form>
          <input type="email" placeholder="Email Address" />
          <button type="submit">Subscribe</button>
        </form>

        <p className="mb-4" style={{ fontSize: "0.9rem", marginTop: "7.5px" }}>
          Will be useed in accordance with our Privacy Policy
        </p>

        <span className="social-icons">
          <Link to="/">
            <div className="icon" style={{ marginLeft: "0px" }}>
              <FaFacebookF size={14} />
            </div>
          </Link>

          <Link to="/">
            <div className="icon">
              <FaTwitter size={14} />
            </div>
          </Link>

          <Link to="/">
            <div className="icon">
              <FaInstagram size={14} />
            </div>
          </Link>

          <Link to="/">
            <div className="icon" style={{ marginRight: "0px" }}>
              <FaLinkedinIn size={14} />
            </div>
          </Link>
        </span>
      </div>
    </div>
  );
};

export default Newsletter;

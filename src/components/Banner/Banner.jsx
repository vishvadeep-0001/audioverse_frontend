import ".//banner.css";
import bannerImg from "../../assets/banner-img.png";
import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div className="banner">

            <div className="banner-info">

                <div className="banner-text">
                    <h1>SALES</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit Voluptate minima eius beatae eos corruptil siue et gen heneq hibe kom cheb.</p>
                </div>

                <div className="banner-tags">
                    <Link to="/" style={{color: "white"}}>Read More</Link>
                    <Link to="/" style={{ backgroundColor: "white", color: "black" }}>Shop Now</Link>
                </div>

            </div>

            <div className="banner-img">
                <img src={bannerImg} alt="" />
            </div>

        </div>
    )
}

export default Banner;
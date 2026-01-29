import "./SecondBanner.css";
import BackgroundImage from "../../../src/img/secondbanner.png";

const SecondBanner = () => {
  const style = {
    width: "100%",
    height: "467px",
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "flex-end",
    backgroundImage: `url(${BackgroundImage})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    backgroundPosition: "left center",
  };

  return (
    <div className="banner-wrap" style={style}>
      <div className="banner-content">
        <h1 className="banner-title">EXPLORE THE BEST OF YOU.</h1>
        <p className="banner-desc">
          You can choose the best option for you, and it does not matter whether
          you are in Prague or San Francisco.
        </p>
        <button className="banner-btn">Shop Now</button>
        </div>
      </div>
  );
};

export default SecondBanner;
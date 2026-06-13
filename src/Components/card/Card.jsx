import "./Card.css";

import image1 from "../../img/image-1.png";
import image2 from "../../img/image-4.png";
import image3 from "../../img/image-5.png";

const Card = () => {
  return (
    <div className="card-wrap">

  <div className="left">

    <div className="cardd">
      <img src={image1} className="img" id="img1" alt="" />

      <div className="card-content">
        <h2>CHOOSE YOUR LOOK</h2>

        <p>See our clothing collections</p>

        <button>SEE OFFERS</button>
      </div>
    </div>

    <div className="cardd">
      <img src={image2} className="img" id="img2" alt="" />

      <div className="card-content">
        <h2>BRAND NEW STYLE</h2>

        <p>Popular clothing brands</p>

        <button>SEE OFFERS</button>
      </div>
    </div>

  </div>

  <div className="right">

    <img src={image3} className="img" id="img3" alt="" />

    <div className="card-content big-content">
      <h2>UP TO 40% OFF</h2>

      <p>Special offers and great deals</p>

      <button>SHOP NOW</button>
    </div>

  </div>

</div>
  );
};

export default Card;
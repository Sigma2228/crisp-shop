import "./Card.css";
import image1 from "../../img/image-1.png"
import image2 from "../../img/image-4.png"
import image3 from "../../img/image-5.png"
const Card = () => {

return (
    <>
    <div className="card-wrap">
    <div className="card" id="card1">
        <img src={image1} className="img" alt="" />
        <div className="card-content">
        <h2 className="title">CHOOSE YOUR LOOK</h2>
        <p className="desc">See our clothing collections</p>
        <button className="card-btn">SEE OFFERS</button>
        </div>
    </div>
    <div className="card" id="card1">
        <img src={image2} className="img" alt="" />
        <div className="card-content">
        <h2 className="title">CHOOSE YOUR LOOK</h2>
        <p className="desc">See our clothing collections</p>
        <button className="card-btn">SEE OFFERS</button>
        </div>
    </div>
    <div className="card" id="card1">
        <img src={image3} className="img" alt="" />
        <div className="card-content">
        <h2 className="title">CHOOSE YOUR LOOK</h2>
        <p className="desc">See our clothing collections</p>
        <button className="card-btn">SEE OFFERS</button>
        </div>
    </div>
    </div>
    </>
)

}
export default Card
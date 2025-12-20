import "./ChoseYourBrand.css";
import brand1 from "../../../img/Frame (1).png"
import brand2 from "../../../img/Frame (2).png"
import brand3 from "../../../img/Frame (3).png"
import brand4 from "../../../img/Frame (4).png"
import brand5 from "../../../img/Frame (5).png"
import brand6 from "../../../img/Frame (6).png"
import brand7 from "../../../img/Frame (7).png"
const ChoseYourBrand = () => {
return (<div className="wrap">
    <h1 className="chose-title">CHOSE YOUR BRAND</h1>
   <img src={brand1} className="brand-img" alt="" />
   <img src={brand2} className="brand-img" alt="" />
   <img src={brand3} className="brand-img" alt="" />
   <img src={brand4} className="brand-img" alt="" />
   <img src={brand5} className="brand-img" alt="" />
   <img src={brand6} className="brand-img" alt="" />
   <img src={brand7} className="brand-img" alt="" />
   </div>
)
}
export default ChoseYourBrand
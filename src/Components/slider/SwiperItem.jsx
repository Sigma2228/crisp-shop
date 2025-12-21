 import "./slider.css";
const SwiperItem = ({text, img1, background, img2}) => {

const sliderStyle = {
    backgroundImage: `url(${background})`, // обов'язково url()
    backgroundSize: 'cover',               // щоб картинка займала весь блок
    backgroundPosition: 'center',          // центр фону
    width: '100%',                          // якщо потрібно
    height: '100%'                         // задай висоту
}
 
   
    return (
        <div style={sliderStyle} className="slider-wrap">
        <h2 className="title" >SUMMER SALE GET 30%OFF ON ALL DRESS</h2>
        <button className="btn">Shop Now</button>
         <img className="img1" src={img1} alt=""/>
         <img className="img2" src={img2} alt=""/>
         </div>
    )
}
export default SwiperItem
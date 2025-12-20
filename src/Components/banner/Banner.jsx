import "./Banner.css";
import background from '../../img/Rectangle\ 7.1.png'
const Banner = () => {
     const style = {
              width: '300px',
    height: '200px',
    backgroundImage: `url(${background})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
        }
    return (
        <div className="banner-wrap"> 
         {style}
        </div>
    )
}
export default Banner
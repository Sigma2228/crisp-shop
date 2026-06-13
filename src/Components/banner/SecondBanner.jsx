import "./Banner.css";
import background from '../../img/secondbanner.png';

const Banner = () => {
    const style = {
        width: '100%',
        height: '467px',
        // Змінено логіку градієнта: від світло-блакитного до прозорого
        backgroundImage: `url(${background})`,
        backgroundSize: 'contain, contain',
        backgroundRepeat: 'no-repeat, no-repeat',
        backgroundPosition: 'left center, left center',
        
    };

    return (
        <div className="banner-wrap" style={style}>
            <h1 className="banner-title">EXPLORE THE BEST OF YOU.</h1>
            <p className="banner-desc">
               You can choose the best option for you, and it does not matter whether you are in Prague or San Francisco.
            </p>
            <button className="banner-btn">Shop Now</button>
        </div>
    );
};

export default Banner;
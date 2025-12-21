import "./Banner.css";
import background from '../../img/Rectangle 7.1.png';

const Banner = () => {
    const style = {
        width: '100%',
        height: '467px',
        // Змінено логіку градієнта: від світло-блакитного до прозорого
        backgroundImage: `linear-gradient(to right, #DDEBF1, #D3E5EE, #C8DEEC, transparent), url(${background})`,
        backgroundSize: 'contain, contain',
        backgroundRepeat: 'no-repeat, no-repeat',
        backgroundPosition: 'right center, right center',
        backgroundColor: '#DDEBF1', // Фоновий колір на випадок, якщо картинка не провантажиться
    };

    return (
        <div className="banner-wrap" style={style}>
            <h1 className="banner-title">shoping without limits.</h1>
            <p className="banner-desc">
                You can choose the best option for you, and it does not matter whether you are in Prague or San Francisco. 
                We will deliver your purchase anywhere!
            </p>
            <button className="banner-btn">Shop Now</button>
        </div>
    );
};

export default Banner;
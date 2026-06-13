import "./CatalogBanner.css";
import background from '../../img/CatalogBanner.png';

const CatalogBanner = () => {
    const style = {
        width: '100%',
        height: '467px',
        backgroundImage: `
linear-gradient(
  90deg,
  rgba(240,240,240,0.98) 0%,
  rgba(240,240,240,0.92) 32%,
  rgba(240,240,240,0.6) 55%,
  rgba(240,240,240,0) 78%
),
url(${background})
`,
        backgroundSize: 'contain, contain',
        backgroundRepeat: 'no-repeat, no-repeat',
        backgroundPosition: 'right center, right center',
        backgroundColor: '#DDEBF1',
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

export default CatalogBanner;
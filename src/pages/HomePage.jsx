import Slider from "../Components/slider/slider";
import Banner from "../Components/banner/Banner"
import Pagination from "../Components/product/Pagination";
import SecondBanner from "../Components/banner/SecondBanner";
import Card from '../Components/card/Card' ;
import Blog from "../Components/tips/Blog";
import Footer from "../Components/footer/footer";
const HomePage = () => {
    return (
        <>
        <Slider />
        <Card />
         <Banner />
          <Pagination/>
           <SecondBanner />
           <Blog />
             <Footer />
        </>
    );
}

export default HomePage;
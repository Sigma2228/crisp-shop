import Slider from "../Components/slider/slider";
import Banner from "../Components/banner/Banner"
import Pagination from "../Components/product/Pagination";
import SecondBanner from "../Components/banner/SecondBanner";
import Card from '../Components/card/Card'
 
const HomePage = () => {
    return (
        <>
        <Slider />
         <Banner />
          <Pagination/>
           <SecondBanner />
             <Card />
        </>
    );
}

export default HomePage;
import ChoseYourBrand from "../Components/chose-your-brand/ChoseYourBrand";
import Header from "../Components/header/Header";
import Slider from "../Components/slider/slider";
import Banner from "../Components/banner/Banner"
const HomePage = () => {
    return (
        <>
        <Header />
        <Slider />
         <ChoseYourBrand />
         <Banner />
        </>
    );
}

export default HomePage;
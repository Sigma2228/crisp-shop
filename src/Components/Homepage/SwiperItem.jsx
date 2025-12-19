const SwiperItem = ({text, img, background}) => {

const sliderStyle = {
    backgroundImage: `url(${background})`, // обов'язково url()
    backgroundSize: 'cover',               // щоб картинка займала весь блок
    backgroundPosition: 'center',          // центр фону
    width: '100%',                          // якщо потрібно
    height: '100%'                         // задай висоту
}

    return (
        <div style={sliderStyle}>
        <h2>SUMMER SALE GET 30%OFF ON ALL DRESS</h2>
         <img src={img} alt="" />

        </div>
    )
}
export default SwiperItem
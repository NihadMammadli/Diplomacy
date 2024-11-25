import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import style from './style.module.scss';
import { images } from '../Assets/Rotate';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';

const ImageCarousel = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };

    function SampleNextArrow(props) {
        const { onClick } = props;
        return (
            <div className={style.slickNext} onClick={onClick}>
                <RightOutlined />
            </div>
        );
    }

    function SamplePrevArrow(props) {
        const { onClick } = props;
        return (
            <div className={style.slickPrev} onClick={onClick} >
                <LeftOutlined />
            </div>
        );
    }

    return (
        <div className={style.SliderMain}>
            <Slider {...settings}>
                {images.map((image, index) => (
                    <div key={index}>
                        <img src={image} alt={`Slide ${index}`} className={style.image} />
                    </div>
                ))}
            </Slider>
        </div>

    );
};

export default ImageCarousel;
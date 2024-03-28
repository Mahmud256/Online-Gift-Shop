import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import img1 from '../../assets/b1.jpg'
import img2 from '../../assets/b2.jpeg'

const Banner = () => {
    const images = [img1, img2];
    return (
        <Carousel showThumbs={false} autoPlay interval={3000} infiniteLoop >
            {
                images.map((image, index) =>
                    <div key={index}>
                        <img src={image} alt="" />
                    </div>
                )
            }
        </Carousel>
    );
};

export default Banner;
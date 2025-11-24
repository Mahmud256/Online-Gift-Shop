import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import img1 from '../../assets/b1.jpg'
import img2 from '../../assets/b2.jpg'
import img3 from '../../assets/b3.jpg'
import img5 from '../../assets/b5.jpg'
import img6 from '../../assets/b6.jpg'

import ad1 from '../../assets/ad1.jpg'
import cd1 from '../../assets/cd1.jpg'
import ad2 from '../../assets/ad2.jpg'
import ad3 from '../../assets/ad3.jpg'

const Banner = () => {
    const images = [img1, img2, img3, img5, img6];
    return (
        <div className=" bal flex flex-col lg:flex-row justify-center lg:items-start items-center gap-3 py-4">

            <div className=" w-[70%]">
                <Carousel showThumbs={false} autoPlay interval={3000} infiniteLoop>
                    {
                        images.map((image, index) =>
                            <div key={index}>
                                <img src={image} alt="" />
                            </div>
                        )
                    }
                </Carousel>
            </div>
            <div className=" ad flex lg:flex-col gap-3 ">
                <img src={ad1} className="lg:hidden" alt="" />
                <span className="flex flex-col gap-3">
                    <img src={ad2} alt="" width="300" height="200" />
                    <img src={ad3} alt="" width="300" height="200" />
                </span>
            </div>
        </div>
    );
};

export default Banner;

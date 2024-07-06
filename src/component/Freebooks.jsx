import React from 'react'
import list from '../../public/list.json'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Cards from './Cards';
import Slider from "react-slick";

const Freebooks = () => {

    const FilterData = list.filter((data) => data.cat === "free");
    // console.log(FilterData)

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <>

            <div className='max-w-screen-2xl mx-auto md:px-20 px-4'>
                <div>
                    <h1 className='text-2xl bold'>Free course offer</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>


                <div>

                    <Slider {...settings}>
                        {
                            FilterData.map((item) => (
                                <Cards item={item} key={item.id} />
                            )
                            )


                        }
                    </Slider>

                </div>
            </div>
        </>
    )
}

export default Freebooks
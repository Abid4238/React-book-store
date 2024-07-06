import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Cards from './Cards'
import list from '../../public/list.json'
import Slider from "react-slick";
import {Link} from 'react-router-dom'

const Courses = () => {
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
                <div className='mt-28 items-center justify-center text-center'>
                    <h1 className='text-2xl font-semibold md:text-2xl  '>
                        We arer deligated to have you <span className='text-pink-500'>here :{')'}</span>

                    </h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia enim animi porro asperiores iusto iste quis pariatur incidunt consequatur quidem ullam nihil, deserunt assumenda nobis, odit aut voluptate? Ad, soluta!

                    </p>
                    <Link to={'/'}><button li className='bg-pink-500 text-white hover:bg-black hover:text-white px-4 py-2 rounded-full mt-5'>Back</button>
                    </Link>
                    <hr className='my-5' />

                    <div className='grid mt-12 grid-cols-1 md:grid-cols-4 '>
                   
                        {
                            list.map((item) => (
                                <Cards  item={item} key={item.id} />
                            )
                            )


                        }
                    
                    </div>
                </div>

            </div>


        </>

    )
}

export default Courses
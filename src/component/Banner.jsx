import React from 'react'
import book from '../../public/book.jpg'

const Banner = () => {
    return (
        <>
            <div className='max-w-screen-2xl mx-auto md:px-20 px-4 flex  flex-col md:flex-row my-20'>

                <div className='mt-6 md:mt-11 md:order-1 order-2'>
                    <div className='w-full md:w-1/2'>
                        <h1 className='text-4xl font-bold'>Hello, Welcome here to learn something
                            <span className='text-pink-500'> new everything</span>
                        </h1>
                        <p className='mt-6 text-xl '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis soluta vitae facere quo beatae distinctio, molestiae modi nemo iste laboriosam!</p>
                        <div className='my-5'>
                            <label className="input input-bordered flex items-center gap-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 16 16"
                                    fill="currentColor"
                                    className="h-4 w-4 opacity-70">
                                    <path
                                        d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                                    <path
                                        d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                                </svg>
                                <input type="text" className="grow" placeholder="Email" />
                            </label>
                            
                        </div>
                        <button className="btn btn-secondary">Secondary</button>
                    </div>

                </div>
                <div className='w-full md:w-1/2 flex justify-center text-center items-center md:order-2 order-1 '>
                    <img className='md:mr-200px' src={book} alt="Banner img" srcset="" />
                </div>



            </div>
        </>
    )
}

export default Banner
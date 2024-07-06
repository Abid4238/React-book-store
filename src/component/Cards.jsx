import React from 'react'

function Cards({item}) {
    // console.log(item)
    return (
        <>
            <div className='m-4'>
                <div className="card bg-base-86 w-72 shadow-xl hover:scale-105 duration-200">
                    <figure>
                        <img
                            src={item.img}
                            alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            {item.title}
                            <div className="badge badge-secondary">{item.cat}</div>
                        </h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions flex justify-between">
                            <div className="badge badge-outline">${item.prize}</div>
                            <div className=" hover:bg-pink-400 text-black px-4 py-1 border rounded-full">Buy</div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Cards
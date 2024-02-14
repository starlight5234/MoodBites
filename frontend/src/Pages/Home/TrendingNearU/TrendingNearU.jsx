import React from 'react'
import TrendingCard from '../../../Components/Cards/TrendingCard'
import { TrendingCardsArray } from '../../../Data/TrendingCards'

const TrendingNearU = () => {

    return (
        <div className='flex justify-center items-center align-middle mt-5'>
            <section className='w-full md:w-full sm:mx-5 px-10'>
                <div className='flex justify-between align-middle '>

                    <div className="left flex items-center align-middle ">
                        <span className='text-xl font-bold md:text-2xl md:font-[700]'>Trending Near You</span>
                    </div>
                </div>
                <div>
                    <div id="content" className=' carousel p-4 flex items-center justify-center overflow-x-auto scroll-smooth md:scrollbar-hide space-x-5'>
                        {
                            TrendingCardsArray.map((data) => (
                                <TrendingCard data={data} />
                            ))
                        }
                    </div>
                </div>
            </section>
        </div>)
}

export default TrendingNearU
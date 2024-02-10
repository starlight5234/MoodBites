import React from 'react'
import css from './Collection.module.css'

import { CollectionCardsArray } from '../../../Data/TrendingCards'
import CollectionCard from '../../../Components/Cards/CollectionCard/CollectionCard'

const Collection = () => {
    return (
        <div className='flex justify-center items-center align-middle mt-5'>
            <section className='w-full md:w-full sm:mx-5 px-10'>
                <div className='flex justify-between align-middle '>

                    <div className="left flex items-center align-middle ">
                        <span className='text-xl font-bold md:text-2xl md:font-[700]'>Collections</span>
                    </div>
                </div>
                <div>
                    <div id="content" className=' carousel p-4 flex items-center justify-center overflow-x-auto scroll-smooth md:scrollbar-hide space-x-5'>
                        {
                            CollectionCardsArray.map((data) => (
                                <CollectionCard data={data} />
                            ))
                        }
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Collection
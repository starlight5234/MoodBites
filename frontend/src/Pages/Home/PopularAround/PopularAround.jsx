import React, { useState, useEffect } from 'react'
import css from './PopularAround.module.css'
import HomepageCard from '../../../utils/Cards/HomepageCard';
import MainCard from '../../../Components/Cards/MainCard/MainCard';
import axios from 'axios';
import { mainRoute } from '../../../Http';


const PopularAround = () => {


    const [refresh, setRefresh] = useState(false)
    const [showSkeleton, setShowSkeleton] = useState(true)
    const [listings, setListings] = useState([])

    useEffect(() => {

        const fetchdata = async () => {
            const response = await axios.get(mainRoute)
            if (response.status === 200) {
                if (response.data.length == 0) {
                    setShowSkeleton(false)
                }
                const uniqueItems = new Set([...listings, ...response.data]);
                setListings(Array.from(uniqueItems));
            }
        }

        fetchdata();
    }, [refresh])

    return (
        <>
            <div className='flex justify-center items-center align-middle mt-5'>
                <section className='w-full md:w-full sm:mx-5 px-10'>
                    <div className='flex justify-between align-middle '>
                        <div className="left flex items-center align-middle ">
                            <span className='text-xl font-bold md:text-2xl md:font-[700]'>Popular localities in and around Banglore</span>
                        </div>
                    </div>
                    <div className={css.innerDiv6}>
                        <div className={css.w7}>
                            <div className={`${css.innerDiv6Body}`}>
                                {
                                    listings.map((data) => (
                                        <HomepageCard data={data} />
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default PopularAround
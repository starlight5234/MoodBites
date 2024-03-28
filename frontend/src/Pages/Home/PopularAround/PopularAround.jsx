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
            const response = await axios.get(mainRoute, data)
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

    const data = {
        "index": 0,
        "url": "https://www.zomato.com/bangalore/jalsa-banashankari?context=eyJzZSI6eyJlIjpbNTg2OTQsIjE4Mzc1NDc0IiwiNTkwOTAiLCIxODM4Mjk0NCIsIjE4MjI0Njc2IiwiNTkyODkiLCIxODM3MzM4NiJdLCJ0IjoiUmVzdGF1cmFudHMgaW4gQmFuYXNoYW5rYXJpIHNlcnZpbmcgQnVmZmV0In19",
        "name": "Jalsa",
        "online_order": false,
        "book_table": false,
        "rate": 4.1,
        "votes": 775,
        "location": "Banashankari",
        "rest_type": "Casual Dining",
        "dish_liked": "Pasta, Lunch Buffet, Masala Papad, Paneer Lajawab, Tomato Shorba, Dum Biryani, Sweet Corn Soup",
        "cuisines": "North Indian, Mughlai, Chinese",
        "cost": 800,
        "type": "Buffet",
        "city": "Banashankari",
        "is_recommended": false
    }

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
                                {/* <HomepageCard data={data} />
                                <HomepageCard data={data} /> */}
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default PopularAround
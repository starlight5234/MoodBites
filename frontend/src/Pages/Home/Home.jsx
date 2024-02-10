import React from 'react'
import HomePageBanner from './HomePageBanner/HomePageBanner'
import TrendingNearU from './TrendingNearU/TrendingNearU'
import Cities from './Cities/Cities'
import Collection from './Collections/Collection'
import PopularAround from './PopularAround/PopularAround'

const Home = () => {
    return (
        <>
            <HomePageBanner />
            <TrendingNearU />
            <Cities />
            <Collection />
            <PopularAround />
        </>
    )
}

export default Home
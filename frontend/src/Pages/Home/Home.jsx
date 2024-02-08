import React from 'react'
import HomePageBanner from './HomePageBanner/HomePageBanner'
import TrendingNearU from './TrendingNearU/TrendingNearU'
import Cities from './Cities/Cities'
import CollectionCard from '../../Components/Cards/CollectionCard'

const Home = () => {
    return (
        <>
            <HomePageBanner />
            <TrendingNearU />
            <Cities />
            <CollectionCard />
        </>
    )
}

export default Home
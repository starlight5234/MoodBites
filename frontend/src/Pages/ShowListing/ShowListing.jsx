import React, { useState, useEffect } from 'react'
import css from './ShowListing.module.css'
import axios from 'axios'
import { useParams, useLocation } from 'react-router-dom';
import { Listings, foodCardScroll, brandsCardScroll } from '../../Data/TrendingCards';
import { homeroute } from '../../Http';
import MainSkeletonCard from '../../Components/Cards/MainSkeletonCard/MainSkeletonCard';
import MainCard from '../../Components/Cards/MainCard/MainCard'
import NavigationBar2 from '../../Components/NavigationBar2/NavigationBar2'
import CategorySelectionComp from '../../utils/OrderingUtils/CategorySelectionComp/CategorySelectionComp';
import CarouselUtil from '../../utils/CarouselUtil/CarouselUtil'
import CircleCard1 from '../../utils/Cards/CircleCards/CircleCard1/CircleCard1'
import CircleCard2 from '../../utils/Cards/CircleCards/CircleCard2/CircleCard2';
import dinning1 from '../../Assets/icons/dinning1.png';
import dinning2 from '../../Assets/icons/dinning2.png';
import delivery1 from '../../Assets/icons/delivery1.png';
import delivery2 from '../../Assets/icons/delivery2.png';
import nightlife1 from '../../Assets/icons/nightlife1.png';
import nightlife2 from '../../Assets/icons/nightlife2.png';


import { orderOnlinePage, diningOutPage, nightLifePage } from '../../Data/Constants'

const ShowListing = () => {
    let location = useLocation();
    let { categoryname } = useParams();
    const page = `category/${categoryname}`;

    let [isActive, setIsActive] = useState({
        delivery: page === orderOnlinePage,
        dinning: page === diningOutPage,
        nightlife: page === nightLifePage
    });

    const [refresh, setRefresh] = useState(false)
    const [listings, setListings] = useState([])
    const [index, setIndex] = useState(1)
    const [search, setSearch] = useState(null)
    const data =
    {
        filters: [],
        search: search,
        index: 1
    }

    useEffect(() => {

        const fetchdata = async () => {
            const response = await axios.post(homeroute, data)

            if (response.status === 200) {
                const uniqueItems = new Set([...listings, ...response.data]);
                setListings(Array.from(uniqueItems));
            }
        }

        fetchdata();
    }, [index])

    const handleIntersection = (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
            setIndex(prevIndex => prevIndex + 1);
        }
    };

    useEffect(() => {
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 1
        };

        const observer = new IntersectionObserver(handleIntersection, options);
        const target = document.getElementById('intersectionTarget');
        if (target) {
            observer.observe(target);
        }

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <div>
            <NavigationBar2 />
            <div className={css.showCaseDiv}>
                <div className={css.showcaseComps}>
                    <CategorySelectionComp title="Delivery" imgSrc={delivery1} imgSrc2={delivery2} color="#FCEEC0" comp='delivery' isActive={isActive} setIsActive={setIsActive} />
                    <CategorySelectionComp title="Dinning" imgSrc={dinning1} imgSrc2={dinning2} color="#EDF4FF" comp='dinning' isActive={isActive} setIsActive={setIsActive} />
                    <CategorySelectionComp title="NightLife" imgSrc={nightlife1} imgSrc2={nightlife2} color="#EDF4FF" comp='nightlife' isActive={isActive} setIsActive={setIsActive} />
                </div>
            </div>
            <div className={css.innerDiv3}>
                <div className={css.filtersDiv}>
                    {/* {filterBoxes} */}
                    filter will be shown here
                </div>
            </div>
            <div className={css.innerDiv4}>
                <div className={css.w7}>
                    <div className={css.innerDiv4Title}>
                        Inspiration for your first order
                    </div>
                    <div className={css.rollerCarosuel}>
                        <CarouselUtil>
                            {foodCardScroll?.map((val, id) => {
                                return <div className={css.cardW} key={id}>
                                    <CircleCard1 imgSrc={val.imgSrc} name={val.name} />
                                </div>
                            })}
                        </CarouselUtil>
                    </div>
                </div>
            </div>
            <div className={css.innerDiv5}>
                <div className={css.w7}>
                    <div className={css.innerDiv5Title}>
                        Top brands for you
                    </div>
                    <div className={css.rollerCarosuel}>
                        <CarouselUtil>
                            {brandsCardScroll?.map((val, id) => {
                                return <div className={css.cardW} key={id}>
                                    <CircleCard2 imgSrc={val.imgSrc} name={val.name} time={val.time} />
                                </div>
                            })}
                        </CarouselUtil>
                    </div>
                </div>
            </div>

            <div className={css.innerDiv6}>
                <div className={css.w7}>
                    <div className={css.innerDiv6Title}>
                        Delivery Restaurants in Gachibowli</div>
                    <div className={css.innerDiv6Body}>
                        {listings?.map((item, id) => {
                            return <MainCard key={id} props={item} />
                        })}
                    </div>
                    <div id="intersectionTarget" className='flex justify-between mx-20'>
                        <MainSkeletonCard /><MainSkeletonCard /><MainSkeletonCard />
                    </div>
                    <div className='flex justify-between mx-20'>
                        <MainSkeletonCard /><MainSkeletonCard /><MainSkeletonCard />
                    </div>
                </div>
            </div>
        </div >

    )
}

export default ShowListing
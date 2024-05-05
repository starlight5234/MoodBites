import React, { useState, useEffect } from 'react'
import css from './ShowListing.module.css'
import axios from 'axios'
import { useParams } from 'react-router-dom';
import { foodCardScroll, brandsCardScroll } from '../../Data/TrendingCards';
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
    let { categoryname } = useParams();
    const page = `/category/${categoryname}`;

    let [isActive, setIsActive] = useState({
        delivery: page === orderOnlinePage,
        dinning: page === diningOutPage,
        nightlife: page === nightLifePage
    });

    // const [prevCateg]
    // console.log(isActive)

    const [refresh, setRefresh] = useState(false)
    const [showSkeleton, setShowSkeleton] = useState(true)
    const [listings, setListings] = useState([])
    const [index, setIndex] = useState(1)
    const [search, setSearch] = useState(null)
    const [rate, setRate] = useState(null)
    const [pricing, setPricing] = useState(null)
    const [sort, setSort] = useState(null)
    const data =
    {
        filters: {
            category: categoryname,
            sort: sort,
            // city: city,
            rating: rate,
            pricing: pricing
        },
        search: search,
        index: index
    }

    useEffect(() => {
        setListings([])
        setIndex(1)
    }, [categoryname])

    useEffect(() => {

        const fetchdata = async () => {
            const response = await axios.post(homeroute, data)
            if (response.status === 200) {
                if (response.data.length == 0) {
                    setShowSkeleton(false)
                }
                const uniqueItems = new Set([...listings, ...response.data]);
                setListings(Array.from(uniqueItems));
            }

        }

        fetchdata();
    }, [index, categoryname, refresh])

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
            threshold: 0.1
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

    const [showFilterModal, setShowFilterModal] = useState(false)
    const [activeComponent, setActiveComponent] = useState(1)
    const [selectedOption, setSelectedOption] = useState('');

    const options = [
        "Popularity",
        "Rating: High to Low",
        "Delivery Time",
        "Cost: Low to High",
        "Cost: High to Low"
    ];

    const handleOptionChange = (option) => {
        setSelectedOption(option);
    };

    const [rating, setRating] = useState(1); // Initial rating value

    const handleRatingChange = (value) => {
        setRating(value);
    };

    const [selectedCost, setSelectedCost] = useState('');

    const costOptions = [
        "Standard",
        "Premium",
        "Luxury"
    ];

    const handleCostChange = (option) => {
        setSelectedCost(option);
    };

    const clearAll = () => {
        setSelectedOption('')
        setRating(null)
        setSelectedCost('')
    }

    const apply = () => {
        setSort(selectedOption)
        setRate(rating)
        setPricing(selectedCost)
        scrollToTop()
        setIndex(1)
        setRefresh(!refresh)
        setListings([])
        setShowFilterModal(!showFilterModal)
    }

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth', // You can use 'auto' for instant scrolling
        })
    }
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
                    <button onClick={() => setShowFilterModal(!showFilterModal)} className='hover:bg-slate-slate-200 flex align-middle items-center space-x-2 border border-slate-400 px-4 py-1 rounded-lg'>
                        <span className='text-lg text-slate-400'>Filters</span>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="rgba(140,163,184,1)"><path d="M6.17071 18C6.58254 16.8348 7.69378 16 9 16C10.3062 16 11.4175 16.8348 11.8293 18H22V20H11.8293C11.4175 21.1652 10.3062 22 9 22C7.69378 22 6.58254 21.1652 6.17071 20H2V18H6.17071ZM12.1707 11C12.5825 9.83481 13.6938 9 15 9C16.3062 9 17.4175 9.83481 17.8293 11H22V13H17.8293C17.4175 14.1652 16.3062 15 15 15C13.6938 15 12.5825 14.1652 12.1707 13H2V11H12.1707ZM6.17071 4C6.58254 2.83481 7.69378 2 9 2C10.3062 2 11.4175 2.83481 11.8293 4H22V6H11.8293C11.4175 7.16519 10.3062 8 9 8C7.69378 8 6.58254 7.16519 6.17071 6H2V4H6.17071ZM9 6C9.55228 6 10 5.55228 10 5C10 4.44772 9.55228 4 9 4C8.44772 4 8 4.44772 8 5C8 5.55228 8.44772 6 9 6ZM15 13C15.5523 13 16 12.5523 16 12C16 11.4477 15.5523 11 15 11C14.4477 11 14 11.4477 14 12C14 12.5523 14.4477 13 15 13ZM9 20C9.55228 20 10 19.5523 10 19C10 18.4477 9.55228 18 9 18C8.44772 18 8 18.4477 8 19C8 19.5523 8.44772 20 9 20Z"></path></svg>
                    </button>
                </div>
            </div>
            {/* <div className={css.innerDiv4}>
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
            </div> */}

            <div className={css.innerDiv6}>
                <div className={css.w7}>
                    <div className={css.innerDiv6Title}>
                        {
                            categoryname == 'dineout'
                                ?
                                <span className='mr-2'>Dining</span>
                                :
                                categoryname == 'delivery'
                                    ?
                                    <span className='mr-2'>Delivery</span>
                                    :
                                    categoryname == 'nightlife'
                                        ?
                                        <span className='mr-2'>Nightlife</span>
                                        :
                                        <></>


                        }
                        Restaurants recommended by Moodbites
                    </div>
                    <div className={css.innerDiv6Body}>
                        {listings?.map((item) => {
                            return <MainCard key={item.index} data={item} />
                        })}
                    </div>
                    {
                        showSkeleton && (
                            <>
                                <div id="intersectionTarget" className='flex justify-between mx-20'>
                                    <MainSkeletonCard /><MainSkeletonCard /><MainSkeletonCard />
                                </div>
                                <div className='flex justify-between mx-20'>
                                    <MainSkeletonCard /><MainSkeletonCard /><MainSkeletonCard />
                                </div>
                            </>
                        )
                    }
                </div>
            </div>




            {
                showFilterModal && (
                    <div className="z-40 fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50">
                        <div className="bg-white rounded-lg max-w-3xl max-h-4/6 w-8/12">
                            <div className="flex justify-between align-middle px-8 pt-5 pb-5">
                                <span className='font-semibold text-2xl '>Filters</span>
                                <button onClick={() => setShowFilterModal(!showFilterModal)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32" fill="currentColor"><path fill="none" d="M0 0h24v24H0z"></path><path d="M11.9997 10.5865L16.9495 5.63672L18.3637 7.05093L13.4139 12.0007L18.3637 16.9504L16.9495 18.3646L11.9997 13.4149L7.04996 18.3646L5.63574 16.9504L10.5855 12.0007L5.63574 7.05093L7.04996 5.63672L11.9997 10.5865Z"></path></svg>
                                </button>
                            </div>
                            <hr />
                            <div className="w-full h-4/6 flex grid grid-cols-7">
                                <div className="flex flex-col left col-span-2 bg-slate-100">
                                    <button onClick={() => setActiveComponent(1)} className={`w-full px-2 py-4 text-lg ${activeComponent == 1 ? 'bg-white' : 'bg-slate-100'}`}>
                                        <p className='text-xl font-medium'>
                                            Sort By
                                        </p>
                                        {selectedOption}
                                    </button>
                                    <button onClick={() => setActiveComponent(2)} className={`w-full px-2 py-4 text-lg ${activeComponent == 2 ? 'bg-white' : 'bg-slate-100'}`}>
                                        <span className='text-xl font-medium'>
                                            Cuisins
                                        </span>
                                    </button>
                                    <button onClick={() => setActiveComponent(3)} className={`w-full px-2 py-4 text-lg ${activeComponent == 3 ? 'bg-white' : 'bg-slate-100'}`}>
                                        <span className='text-xl font-medium'>
                                            Rating
                                        </span>
                                    </button>
                                    <button onClick={() => setActiveComponent(4)} className={`w-full px-2 py-4 text-lg ${activeComponent == 4 ? 'bg-white' : 'bg-slate-100'}`}>
                                        <p className='text-xl font-medium'>
                                            Cost per person
                                        </p>
                                        {selectedCost}
                                    </button>
                                </div>
                                <div className="right col-span-5 p-4">
                                    {activeComponent === 1 && (
                                        <div className='flex flex-col space-y-3'>
                                            {
                                                options.map((option, index) => (
                                                    <div key={index} className="flex align-middle items-center">
                                                        <input
                                                            type="radio"
                                                            id={option}
                                                            name="sortingOption"
                                                            value={option}
                                                            checked={selectedOption === option}
                                                            onChange={() => handleOptionChange(option)}
                                                            className="mr-2 focus:ring-red-500"
                                                        />
                                                        <label className="text-lg" htmlFor={option}>{option}</label>
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    )}

                                    {activeComponent === 2 && (
                                        <>
                                            yet to decide
                                        </>
                                    )}

                                    {activeComponent === 3 && (
                                        <>
                                            <p>Rating</p><span className='ml-2 font-semibold text-xl'>{
                                                rating == 1
                                                    ?
                                                    <>Any</>
                                                    :
                                                    <>
                                                        {rating}+
                                                    </>
                                            }</span>
                                            <div className='h-full w-full flex align-middle justify-center items-center'>
                                                <div className="flex items-center">
                                                    {[1, 2, 3, 4, 5].map((value, index) => (
                                                        <React.Fragment key={value}>
                                                            <label className="relative">
                                                                <input
                                                                    type="radio"
                                                                    name="rating"
                                                                    value={value}
                                                                    className="sr-only"
                                                                    checked={rating === value}
                                                                    onChange={() => handleRatingChange(value)}
                                                                />
                                                                <span
                                                                    className={`flex align-middle rounded-full inline-block mx-1 cursor-pointer ${rating <= value ? 'bg-red-500' : 'bg-gray-300'
                                                                        } ${rating == value ? 'w-5 h-5' : 'w-4 h-4'
                                                                        }`}
                                                                />
                                                            </label>
                                                            {index < 4 && <div className="w-12 h-px bg-gray-300" />}
                                                        </React.Fragment>
                                                    ))}
                                                </div>
                                            </div>
                                        </>
                                    )}

                                    {activeComponent === 4 && (
                                        <div className='flex flex-col space-y-3'>
                                            {
                                                costOptions.map((option, index) => (
                                                    <div key={index} className="flex align-middle items-center">
                                                        <input
                                                            type="radio"
                                                            id={option}
                                                            name="sortingOption"
                                                            value={option}
                                                            checked={selectedCost === option}
                                                            onChange={() => handleCostChange(option)}
                                                            className="mr-2 focus:ring-red-500"
                                                        />
                                                        <label className="text-lg" htmlFor={option}>{option}</label>
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    )}
                                </div>
                            </div>
                            <hr />
                            <div className="flex space-x-3  justify-end align-middle px-8 pt-5 pb-5">
                                <button onClick={() => clearAll()} className='text-black hover:bg-slate-100 px-4 py-2 rounded-md text-lg'>
                                    Clear All
                                </button>
                                <button onClick={() => apply()} className='bg-red-500 text-white px-4 py-2 rounded-md text-lg'>
                                    Apply
                                </button>
                            </div>
                        </div>
                    </div>
                )
            }
        </div >

    )
}

export default ShowListing
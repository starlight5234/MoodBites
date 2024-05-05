import React, { useState } from 'react'
import css from './MainCard.module.css'
import { Link } from 'react-router-dom';

import upArrowIcon from '../../../Assets/icons/up-arrow-icon.png';
import maxSAfety from '../../../Assets/icons/maxsafty.png';
import star from '../../../Assets/icons/star.png';

const MainCard = ({ data }) => {
    const { url, name, rest_type, rate, cost, votes, is_recommended, tags } = data
    const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
    const [showTooltip, setShowTooltip] = useState(false);

    // const [tags, setTags] = useState(
    //     [
    //         { name: 'Quality', colour: 'green' },
    //         { name: "Food", colour: 'red' },
    //         { name: "Girls", colour: 'yellow' },
    //         { name: "Boys", colour: 'gray' },
    //         { name: "Washroom", colour: 'green' },
    //         { name: "Ambience", colour: 'red' },
    //         { name: 'Quantity', colour: 'green' },
    //         { name: "chicken", colour: 'red' },
    //         { name: "bad", colour: 'yellow' },
    //         { name: "delivery", colour: 'gray' },
    //     ]
    // )

    const handleMouseMove = (e) => {
        setTooltipPosition({ x: e.clientX, y: e.clientY });
    };

    return (
        <Link className={`${css.outerDiv}  group`} onMouseMove={handleMouseMove} to={url} >
            <div className={`${css.innerDiv} relative group overflow-hidden`} onMouseMove={handleMouseMove} onMouseEnter={() => setShowTooltip(true)} onMouseLeave={() => setShowTooltip(false)}>
                <div className={css.imgBox}>
                    {/* {promoted && <div className={css.promoted}>Promoted</div>} */}
                    <img className={css.img} src='https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D' alt="food image" />
                    {/* {offB && <div className={css.off}>{off}% OFF</div>}
                    {proExtraB && <div className={css.offPro}>Pro extra {proExtra}% OFF</div>} */}
                </div>
                <div className={css.txtBox}>
                    <div className={css.titleBox}>
                        <div className={css.title}>{name}</div>
                        <div className={css.ratingBox}>
                            {
                                rate > 1
                                    ?
                                    <>
                                        {rate} <img className={css.star} src={star} alt="gorwing arrow" />
                                    </>
                                    :
                                    <>
                                        New
                                    </>
                            }
                        </div>
                    </div>
                    <div className={css.tagBox}>
                        <div className={css.tagTitle}>{rest_type}</div>
                        <div className={css.tagTxt}>₹<span className={css.type}>{cost}</span> for <span className={css.num}>One</span></div>
                    </div>
                </div>
                {
                    votes >= 500 && (
                        <div className={css.footer}>
                            <div className={css.scroll1}>
                                <div className={css.lg1}><img className={css.upArrow} src={upArrowIcon} alt="gorwing arrow" /></div>
                                <div className={css.ordersPlaces}>{votes} orders placed from here recently</div>
                                <div className={css.lg2}><img className={css.maxSafety} src={maxSAfety} alt="max safety" /></div>
                            </div>
                        </div>
                    )
                }
                {showTooltip && (
                    <div className="absolute z-20 left-1 top-1">
                        {/* White background with opacity */}
                        <div className="w-10/12 bg-white bg-opacity-0 p-2 rounded-md shadow-lg">
                            {/* Badges */}
                            <span className="z-20 text-xs text-black flex flex-wrap align-middle items-center">
                                {tags && tags.map((tag, index) => (
                                    <span key={index} className={`bg-${tag.colour}-100 text-${tag.colour}-800 text-xs font-medium me-2 my-1 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 opacity-100`}>{tag.name}</span>
                                ))}
                            </span>
                        </div>
                    </div>
                )}
                {
                    is_recommended && (
                        <div className='absolute -top-3 -right-3 rounded-full bg-white pt-2 pr-2'>
                            <img className='' width="45" height="45" src="https://img.icons8.com/bubbles/100/facebook-like.png" alt="facebook-like" />
                        </div>
                    )
                }
            </div>
        </Link>
    )
}

export default MainCard

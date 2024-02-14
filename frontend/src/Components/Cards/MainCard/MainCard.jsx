import React from 'react'
import css from './MainCard.module.css'
import { Link } from 'react-router-dom';

import biryani from '../../../Assets/images/profilebanner.jpg'
import upArrowIcon from '../../../Assets/icons/up-arrow-icon.png';
import maxSAfety from '../../../Assets/icons/maxsafty.png';
import safeDelivery from '../../../Assets/icons/safe-delivery.png';
import star from '../../../Assets/icons/star.png';

const MainCard = ({ data }) => {
    const { id, url, name, rest_type, rate, cost, votes, city } = data

    return (
        <Link className={css.outerDiv} to={url}>
            <div className={css.innerDiv}>
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
                    votes > 5000 && (
                        <div className={css.footer}>
                            <div className={css.scroll1}>
                                <div className={css.lg1}><img className={css.upArrow} src={upArrowIcon} alt="gorwing arrow" /></div>
                                <div className={css.ordersPlaces}>{votes} orders placed from here recently</div>
                                <div className={css.lg2}><img className={css.maxSafety} src={maxSAfety} alt="max safety" /></div>
                            </div>
                        </div>
                    )
                }
            </div>
        </Link>
    )
}

export default MainCard

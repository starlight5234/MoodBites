import React from 'react'
import css from './CollectionsCard.module.css'

const CollectionCard = ({ data }) => {
    return (
        <div className={css.card}>
            <img className={css.cardImg} src={data.image} alt="collection card" />
            <div className={css.details}>
                <div className={css.title}>{data.title}</div>
                <div className={css.count}> <span className={css.count}> {data.count} </span><span className={css.places}>Places</span>  <span className={css.rightArrowBox} >
                    {/* <img className={css.rightArrow} src={rightArrow} alt="right arrow" /> */}
                </span></div>
            </div>
        </div>
    )
}

export default CollectionCard
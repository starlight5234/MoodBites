import React from 'react'
import css from './PopularAround.module.css'
import { Link } from 'react-router-dom';
import MainCard from '../../../Components/Cards/MainCard/MainCard';

const PopularAround = () => {


    const data = {
        link2: "",
        promoted: true,
        time: "25",
        offB: "asdf",
        proExtraB: "asdf",
        off: "asdf",
        proExtra: "something something",
        name: "Name hello",
        rating: "4",
        imgSrc: "https://zomatoclone.koushilmankali.in/images/Food/biryani.png"
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
                            <div className={css.innerDiv6Body}>
                                <MainCard props={data} />
                                <MainCard props={data} />
                                <MainCard props={data} />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default PopularAround
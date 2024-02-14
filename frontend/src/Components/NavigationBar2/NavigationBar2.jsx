import React from 'react'
import { Link } from 'react-router-dom'

import SearchBar from '../../utils/SearchBar/SearchBar'

import css from './NavigationBar2.module.css';

const NavigationBar2 = () => {

    return (
        <div className={css.navbar}>
            {/* <img className={css.menuBar} src={menuBar} alt='menu bar' onClick={() => setToggleMenu(val => !val)} /> */}
            <div className={css.navbarInner}>
                <div className={css.leftSide}>
                    <Link to='/' className="">
                        <img className='h-8' src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png" alt="" srcset="" />
                    </Link>
                </div>
                <div className={css.searchBar}>
                    <SearchBar />
                </div>
            </div>
        </div>

    )
}

export default NavigationBar2
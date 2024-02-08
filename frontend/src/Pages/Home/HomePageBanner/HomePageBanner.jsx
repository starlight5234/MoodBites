import { useState } from 'react';

import Navbar from '../../../Components/NavigationBar/NavigationBar'
import MobileNavbar from '../../../Components/MobileNavbar/MobileNavbar';
import SearchBar from '../../../utils/SearchBar/SearchBar'

import css from './HomePageBanner.module.css'

import banner from '../../../Assets/banners/banner1.jpg'

let HomePageBanner = () => {
    let [toogleMenu, setToggleMenu] = useState(true);

    let toggleBanner = toogleMenu ? (<div className={css.banner}>
        {/* <Navbar setToggleMenu={setToggleMenu} toogleMenu={toogleMenu} /> */}
        <div className={css.bannerInner}>
            <img src={banner} alt="banner" className={css.bannerImg} />
            <div className={css.bannerTxt}>
                <div className={css.title}>Zomato</div>
                <div className={css.tag}>Discover the best food & drinks in <span className={css.bld}>Mumbai</span></div>
                <div className={css.searchbar}>
                    <SearchBar />
                </div>
            </div>
        </div>
    </div>) : <MobileNavbar setToggleMenu={setToggleMenu} toogleMenu={toogleMenu} />

    return toggleBanner;
}

export default HomePageBanner
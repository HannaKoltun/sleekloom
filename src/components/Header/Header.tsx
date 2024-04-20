import './Header.css';
import { IoIosArrowDown } from "react-icons/io";
import { CiGlobe } from "react-icons/ci";
import { SlMagnifier } from "react-icons/sl";
import { LiaShoppingBasketSolid } from "react-icons/lia";
import { BsPerson } from "react-icons/bs";
import { useState, useEffect } from 'react';
import RegistrationPage from '../../pages/RegistrationPage/RegistrationPage';
import CartPage from '../../pages/CartPage/CartPage';
import SearchPage from '../../pages/SearchPage/SearchPage';
import { Link} from 'react-router-dom';


export default function Header() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isBasketOpen, setisBasketOpen] = useState(false);
    const [isSearchOpen, setisSearchOpen] = useState(false);

    const [menuIcon, setMenuIcon] = useState(<BsPerson className='iconsRight' />);
    const [basketIcon, setbasketIcon] = useState(<LiaShoppingBasketSolid className='iconsRight' />);
    const [searchIcon, setSearchIcon] = useState(<SlMagnifier className='iconsRightTwo' />);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    const toggleBasket = () => {
        setisBasketOpen(!isBasketOpen);
    };
    const toggleSearch = () => {
        setisSearchOpen(!isSearchOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };
    const closeBasket = () => {
        setisBasketOpen(false);
    };
    const closeSearch = () => {
        setisSearchOpen(false);
    };



    return (
        <>
            <div className='headerContainer'>
            <Link to={`/`} className='logo'><div className='logo'>SleekLoom</div></Link>
                <div className='navigation'>

                    <div className='collection'>
                        Collection <IoIosArrowDown className="headericon" />
                    </div>

                    <div className='catalog'>
                        Catalog <IoIosArrowDown className="headericon" />
                    </div>

                    <div className='discounts'>
                        Discounts <IoIosArrowDown className="headericon" />
                    </div>
                </div>

                <div className='headerIcons'>

                    <div onClick={toggleSearch} style={{ cursor: 'pointer' }}>{searchIcon}</div>
                    <SearchPage isSearchOpen={isSearchOpen} closeSearch={closeSearch} />


                    <div onClick={toggleMenu} style={{ cursor: 'pointer' }}>{menuIcon}</div>
                    <RegistrationPage isMenuOpen={isMenuOpen} closeMenu={closeMenu} />

                    <div onClick={toggleBasket} style={{ cursor: 'pointer' }}>{basketIcon}</div>
                    <CartPage isBasketOpen={isBasketOpen} closeBasket={closeBasket} />

                </div>
            </div >
        </>
    );
}




import React, { useState } from 'react';
import FeaturedItemsPage from '../../pages/FeaturedItemsPage/FeaturedItemsPage';
import Header from '../Header/Header';
import './Slider.css';
import StyleFusionPage from '../../pages/StyleFusionPage/StyleFusionPage';
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import FeaturedItemsTwoPage from '../../pages/FeaturedItemsTwoPage/FeaturedItemsTwoPage';

const Slider = () => {
    const pages = [
        <FeaturedItemsPage />,
        <FeaturedItemsTwoPage />
    ];

    const [currentPageIndex, setCurrentPageIndex] = useState(0);

    const nextSlide = () => {
        const newIndex = (currentPageIndex + 1) % pages.length;
        setCurrentPageIndex(newIndex);
    };

    const prevSlide = () => {
        const newIndex = (currentPageIndex - 1 + pages.length) % pages.length;
        setCurrentPageIndex(newIndex);
    };

    return (
        <div className="slider">
            <div className='featiconscont'><IoIosArrowBack onClick={prevSlide}></IoIosArrowBack> <IoIosArrowForward onClick={nextSlide}></IoIosArrowForward ></div>
            {pages[currentPageIndex]}
        </div>
    );
};

export default Slider;

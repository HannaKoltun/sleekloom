import './MainPage.css';
import back from "D:/Docs/TMS/sleekloom/sleemloom/sleem-loom/src/assets/bg.jpg";
import graff from "D:/Docs/TMS/sleekloom/sleemloom/sleem-loom/src/assets/gr.png";
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FaArrowRight } from "react-icons/fa6";
import { counterSlice, fetchData } from '../../slice/cardsSlice';


export default function MainPage() {

    return (

        <>
            <div className='mainContainer'>
                <img src={back} alt="bg" className='back' />
                <div className='relativeContainer'>
                    <div className='topContainer'>
                        SLEEK
                        <div className='imgsleek'>
                        </div>
                    </div>
                    <div className='mediumContainer'>
                        <div className='imgloom'>
                        </div>
                        LOOM
                        <div className='buttonContainer'>
                            <img src={graff} alt="bg" className='gragg' />
                            <button className='buttonRing'>SHOP NOW</button>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}




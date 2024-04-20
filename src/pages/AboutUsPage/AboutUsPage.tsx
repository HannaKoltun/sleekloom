import './AboutUsPage.css';
import backWhite from "D:/Docs/TMS/sleekloom/sleemloom/sleem-loom/src/assets/orangebg.jpg";
import { useState, useEffect } from 'react';
import AboutUs from '../../components/AboutUs/AboutUs';

export default function AboutUsPage() {


    const [imageUrl, setImageUrl] = useState('');

    useEffect(() => {
        async function fetchImage() {
            try {
                let response = await fetch('https://loremflickr.com/320/240/car');
                let blob = await response.blob();
                let url = URL.createObjectURL(blob);
                setImageUrl(url);
            } catch (error) {
                console.error('Failed to fetch image:', error);
            }
        }

        fetchImage();
    }, []);


    return (
        <>
            <div className='usContainer'>
            <img src={backWhite} alt="bg" className='backOrange' />
            <div className='contForcomp'>
            {imageUrl && <img src={imageUrl} alt="Animal" className='usImageOne' />}
            <AboutUs></AboutUs>
            {imageUrl && <img src={imageUrl} alt="Animal" className='usImageTwo' />}
            {imageUrl && <img src={imageUrl} alt="Animal" className='usImageThree' />}
            </div>
            </div>
        </>
    );
}




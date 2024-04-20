import './StyleFusionPage.css';
import { useState, useEffect } from 'react';

export default function StyleFusionPage() {
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
            <div className='fusionContainer'>
                <div className='fusionMiniContainer'>
                <div className='textFusion'>Style fusion: </div>
                {imageUrl && <img src={imageUrl} alt="Animal" className='fusionImage' />}
                <div className='textFusion'>where trends converge </div>
                </div>
            </div>
        </>
    );
}




import './GetTheLook.css';
import { IFeaturedItems } from '../../types/interface';
import { useState, useEffect } from 'react';

export default function GetTheLook({ title, styleFeat, slyleFeatImage, styleFeatTwo, price, cardContainer, featCostContainer  }: IFeaturedItems) {

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
            <div className='containerCardLook'>
                {imageUrl && <img src={imageUrl} alt="Animal" className='imageLook' />}
                <div className={featCostContainer}>
                    <div className={styleFeat}>{title}</div>
                    <div className={styleFeatTwo}>{price}</div>
                </div>
            </div>
        </>
    );
}




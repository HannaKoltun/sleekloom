import './StyleRedefinedPage.css';
import backWhite from "../../assets/whitebg.jpg";
import { useState, useEffect } from 'react';

export default function StyleRedefinedPage() {

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
            <div className='redefinedContainer'>
                <img src={backWhite} alt="bg" className='backWhite' />
                <div className='containerRedef'>
                    {imageUrl && <img src={imageUrl} alt="Animal" className='redefinedimg' />}
                    <div className='containerRedefText'>
                        <div className='textredefOne'> Style Redefined,</div>
                        <div className='textredefTwo'> City Unleashed</div>
                    </div>
                    <div className='containerRedefBottom'>
                        {imageUrl && <img src={imageUrl} alt="Animal" className='redefinedImgBottomOne' />}
                        {imageUrl && <img src={imageUrl} alt="Animal" className='redefinedImgBottomTwo' />}
                    </div>
                </div>
            </div>
        </>
    );
}




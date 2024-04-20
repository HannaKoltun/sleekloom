import './FeaturedItems.css';
import { useState, useEffect } from 'react';
import { IFeaturedItems } from '../../types/interface';
import { useSelector, useDispatch } from 'react-redux';
import { fetchData } from '../../slice/cardsSlice';
import { Link} from 'react-router-dom';

export default function FeaturedItems({ image, id, title, 
    styleFeat, price, slyleFeatImage, styleFeatTwo, 
    cardContainer, featCostContainer }: IFeaturedItems) {


    return (
        <>
            <div key={id}>
                <Link to={`/${id}`} className='linkStyle'>
                    <div className={cardContainer}>
                            <div key={id}>
                                <img src={image} className={slyleFeatImage} />
                            </div>
                        <div className={featCostContainer}>
                            <div className={styleFeat}>{title}</div>
                            <div className={styleFeatTwo}>{price}$</div>
                        </div>
                    </div>
                </Link >
            </div>
        </>
    );
}




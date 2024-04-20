import './OneProductPage.css';
import FeaturedItems from '../../components/FeaturedItems/FeaturedItems';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchData } from '../../slice/cardsSlice';
import back from "D:/Docs/TMS/sleekloom/sleemloom/sleem-loom/src/assets/bg.jpg";
import { fetchOneProduct } from '../../slice/oneProductSlice';
import { useParams } from 'react-router-dom';

export default function OneProductPage() {
    //данные одной карточки
    const { id } = useParams();

    const dispatch = useDispatch<any>()

    useEffect(() => {
        if (typeof id === 'string') {
            dispatch(fetchOneProduct(id))
        }
    }, [])

    const oneprod = useSelector((state: any) => state.onePost.oneProduct)
    console.log(oneprod)


    //менять цвет и размер
    const [selectedColor, setSelectedColor] = useState('');
    const [selectedSize, setSelectedSize] = useState('');
    const handleColorChange = (color: any) => {
        setSelectedColor(color);
    };
    const handleSizeChange = (size: any) => {
        setSelectedSize(size);
    };

    // // загрузка данных api
    // const [loading, setLoading] = useState(true);

    // useEffect(() => {
    //     dispatch(fetchData())
    //         .then(() => setLoading(false))
    //         .catch(() => setLoading(false));
    // }, [dispatch]);

    // const data = useSelector((state: any) => state.counter.data);
    // console.log(data)

    // if (loading) {
    //     return <div>Loading...</div>;
    // }
    //обрезать title
    const truncateText = (text: string, wordsCount: number) => {
        const words = text.split(' ');
        if (words.length > wordsCount) {
            return words.slice(0, wordsCount).join(' ') + '...';
        }
        return text;
    };



    return (
        <>

            <div className='mainContainer'>
                <img src={back} alt="bg" className='back' />
                <div className='relativeContainer'>
                            <div key={oneprod.id}>
                                <img src={oneprod.image} className='imageOneProduct' />
                            </div>
         

                    <div className='oneProductSettings'>
                  
                            <div key={oneprod.id}>
                                <div className='oneProductTitle'>{oneprod.title}</div>
                                <div className='oneProductCount'>{oneprod.price}$</div>

                                <div className='oneProductColor'>
                                    <div className='textColor'>Color: {selectedColor} </div>
                                    <div className='buttonsColor'>
                                        <button onClick={() => handleColorChange('Brown')} className='buttonsColorBrown'></button>
                                        <button onClick={() => handleColorChange('Black')} className='buttonsColorBlack'></button>
                                        <button onClick={() => handleColorChange('White')} className='buttonsColorWhite'></button></div>
                                </div>
                                <div className='oneProductSize'>
                                    <button onClick={() => handleSizeChange('XS')} className='buttonsSize'>XS</button>
                                    <button onClick={() => handleSizeChange('S')} className='buttonsSize'>S</button>
                                    <button onClick={() => handleSizeChange('M')} className='buttonsSize'>M</button>
                                    <button onClick={() => handleSizeChange('L')} className='buttonsSize'>L</button>
                                    <button onClick={() => handleSizeChange('XL')} className='buttonsSize'>XL</button>
                                    {/* <h3>Выбранный размер: {selectedSize}</h3> */}
                                </div>
                                <button className='addToCart'>Add to Cart</button>
                            </div>
                    </div>
                </div>
            </div>

        </>
    );
}








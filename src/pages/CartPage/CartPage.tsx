import Button from '../../components/Button/Button';
import './CartPage.css';
import { RxCross2 } from "react-icons/rx";
import { LuSmile } from "react-icons/lu";
import { TbMoodSad } from "react-icons/tb";
import { Link } from 'react-router-dom';
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { ReactNode } from 'react';
import { RiDeleteBin6Line } from "react-icons/ri";
import { clearCartAction, clearAllCartAction } from '../../slice/oneProductSlice';

export default function CartPage({ isBasketOpen, closeBasket }: any) {


    const cartItems = useSelector((state: any) => state.onePost.cartItems);
    const dispatch = useDispatch();
    const [arrayText, setArrayText] = useState<ReactNode>(null);

    const truncateText = (text: string, wordsCount: number) => {
        const words = text.split(' ');
        if (words.length > wordsCount) {
            return words.slice(0, wordsCount).join(' ') + '...';
        }
        return text;
    };


    const handleDeleteItem = (id: number) => {
        dispatch(clearCartAction({ id }));
    };

    const handleEmptyCart = (userId: any) => {
        dispatch(clearAllCartAction(userId));
    };


    useEffect(() => {
        setArrayText(
            cartItems.length > 0 ? (
                <div className='cartContainer'>
                    <div className='textCart'>Cart</div>
                    <RxCross2 onClick={closeBasket} style={{ cursor: 'pointer' }} className='crossIcon' />
                    <LuSmile className='iconSmileS' />
                    {cartItems.map((oneprod: any) => (
                        <div key={oneprod.id} className='cartItem'>

                            <div className='containerForItems'>
                                <img src={oneprod.image} className='cartImage' />
                                <div className='cartTitle'>{truncateText(oneprod.title, 3)}</div>
                                <div className='cartPrice'>{oneprod.price}$</div>
                                <RiDeleteBin6Line className='deleteIcon' onClick={() => handleDeleteItem(oneprod.id)} />
                            </div>
                        </div>
                    ))}
                    <button className='emptyButton' onClick={handleEmptyCart}>Empty the cart</button>

                </div>
            ) : (
                <>
                    <div className='cartContainer'>
                        <RxCross2 onClick={closeBasket} style={{ cursor: 'pointer' }} className='crossIcon' />
                        <div className='textCart'>Cart</div>
                        <div className='titleCart'>Your cart is empty right now <TbMoodSad className='iconSmile' /> </div>
                        <Link className='signLink' to="/cataloge"><Button buttonStyle='buttonLogIn' isDisabled={false} text="go to the catalog" /></Link>
                    </div>
                </>
            )
        );
    }, [cartItems]);

    return (
        <>
            {isBasketOpen && (
                <div>{arrayText}</div>
            )}
        </>
    );
}



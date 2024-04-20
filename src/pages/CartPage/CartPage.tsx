import Button from '../../components/Button/Button';
import './CartPage.css';
import { RxCross2 } from "react-icons/rx";
import { TbMoodSad } from "react-icons/tb";

export default function CartPage({ isBasketOpen, closeBasket }: any) {
    return (
        <>
            {isBasketOpen && (
                <div className='cartContainer'>
                    <RxCross2 onClick={closeBasket} style={{ cursor: 'pointer' }} className='crossIcon' />
                    <div className='textCart'>Cart</div>
                    <div className='titleCart'>Your cart is empty right now <TbMoodSad className='iconSmile' /> </div>
                    <div className='descriptionCart'>If you added somthing to your cart, please log in.</div>
                    <Button buttonStyle='buttonLogIn' isDisabled={false} text="Log In" />
                </div>
            )}
        </>
    );
}


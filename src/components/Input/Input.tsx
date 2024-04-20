import './Input.css';
import { useState, useEffect } from 'react';
import GetTheLook from '../../components/GetTheLook/GetTheLook';
import { FaInstagram } from "react-icons/fa6";
import { BsFacebook } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa6";


export default function Input() {


    return (
        <>
            <div className='inputContainer'>
<div className='containerMini'>
                <div className='inputText'>Subscribe to our newsletters</div>
                <div className='inputName'>Your email</div>
                <input type='email' className='realInput' placeholder='Type your email here..'></input>
                <button type='submit' className='inputButton'>Subscribe</button>
                </div>
            </div>
        </>
    );
}




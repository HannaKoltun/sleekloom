import './SearchInput.css';
import { useState, useEffect } from 'react';
import GetTheLook from '../../components/GetTheLook/GetTheLook';
import { FaInstagram } from "react-icons/fa6";
import { BsFacebook } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa6";
import { SlMagnifier } from "react-icons/sl";


export default function SearchInput() {

    return (
        <>
            <form method="get" action="">
                <input id="textbox" name="getName" className='searchInput' placeholder="Enter product name" type="text"></input>
                <button id="get"  type="submit">Отправить</button>
                <SlMagnifier className='iconSearch' />
            </form>

        </>
    );
}






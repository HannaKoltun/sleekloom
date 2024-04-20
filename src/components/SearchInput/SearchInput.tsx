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
            <input id='1' type='search' className='searchInput' placeholder='Enter product name'>
            </input>
            <SlMagnifier className='iconSearch'/>
        </>
    );
}



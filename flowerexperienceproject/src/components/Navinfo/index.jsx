import React from 'react'
import { FaRegUser } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import './index.css'

function index() {
    return (
        <div>
            <button className='buttonInfos'><IoSearch className='icon-css'/></button>
            <button className='buttonInfos'><FaRegUser className='icon-css'/></button>
            <button className='buttonInfos'><FaRegStar className='icon-css'/></button>
        </div>
    )

}

export default index 

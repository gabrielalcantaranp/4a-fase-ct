import React from 'react'
import { FaUser } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import './index.css'

function index() {
    return (
        <div>
            <button className='buttonInfos'><FaSearch className='icon-css'/></button>
            <button className='buttonInfos'><FaUser className='icon-css'/></button>
            <button className='buttonInfos'><FaStar className='icon-css'/></button>
        </div>
    )

}

export default index 

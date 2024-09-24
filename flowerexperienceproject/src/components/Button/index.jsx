import React from 'react'
import { FaUser } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import './index.css'

function index() {
    return (
        <div>
            <button className='button'>ARRANJOS</button>
            <button className='button'>PLANTAS</button>
            <button className='button'>DESIDRATADAS</button>
            <button className='button'>ORQUÍDEAS</button>
        </div>
    )

}

export default index 
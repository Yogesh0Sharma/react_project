import React from 'react'
import { NavLink } from 'react-router-dom'
import { GiKnifeFork } from 'react-icons/gi';

export default function header() {
    return (
        <div>
            <NavLink className="nav" to="/">
                {/* <img className='logo' src="https://i.ibb.co/4WxV1ZD/fresh.jpg" alt="image" /> */}
                <h1 className='logo'><GiKnifeFork /> Khana Khazana</h1>
            </NavLink>
        </div>
    )
}

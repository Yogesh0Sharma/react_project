import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';

export default function Searched() {

    const [val, setVal] = useState("")

    return (
        <div className='search_parent'>
            <div className='serch_outer'>
                <input type="text" value={val} onChange={(e) => {
                    setVal(e.target.value)
                }} />
                <NavLink to={`/searched/${val}`}><button onClick={() => {
                    setVal("");
                }}><FaSearch /></button></NavLink>
            </div>
        </div >
    )
}

import { FaPizzaSlice } from 'react-icons/fa';
import { GiNoodles } from 'react-icons/gi';
import { GiHamburger } from 'react-icons/gi';
import { GiFlatfish } from 'react-icons/gi';
import { GiIndiaGate } from 'react-icons/gi';
import { NavLink } from 'react-router-dom';

import React from 'react'

export default function () {
    return (
        <div className='cuisen_icon_div'>
            <NavLink activeClassName="active" to="/FoodCatagory/indian"><span><GiIndiaGate /></span></NavLink>
            <NavLink activeClassName="active" to="/FoodCatagory/italian"><span><FaPizzaSlice /></span></NavLink>
            <NavLink activeClassName="active" to="/FoodCatagory/japanese"><span><GiNoodles /></span></NavLink>
            <NavLink activeClassName="active" to="/FoodCatagory/american"><span><GiHamburger /></span></NavLink>
            <NavLink activeClassName="active" to="/FoodCatagory/chinese"><span><GiFlatfish /></span></NavLink>
        </div>
    )
}

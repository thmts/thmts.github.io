import React from 'react'
import {Link} from 'react-router-dom'

import './Navigation.css'

export default function Navigation () {
    return <nav>
        <label>Web corner</label>
        <Link className='nav-link' to="/">Home </Link>
        <Link className='nav-link' to="/learning">Learning </Link>
        <Link className='nav-link' to="/projects">Projects </Link>
        <Link className='nav-link' to="/about">About </Link>
    </nav>
}
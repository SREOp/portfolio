import React from 'react'
import Link from 'next/link'

export default function Navbar () 
{ 
    return (
    <div className = "navbar">
        <Link href="/">

        <p className = "navLogo">Yenyu</p>
        </Link>
        
        <nav className = "navLinks">
            <ul>
                <Link href="/aboutMe">
                <li className = "navLink">
                About Me
                </li>
                </Link>   

                <Link href="/works">
                <li className = "navLink">
                Works
                </li>
                </Link>

                <Link href="/resume">
                <li className = "navLink">
                Resume
                </li>
                </Link>

                <Link href = "/contact">
                <li className = "navLink">
                Contact
                </li> 
                </Link>    

            </ul>
     
        </nav>
    </div>
);
}


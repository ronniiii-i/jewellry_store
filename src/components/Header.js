import React, { useState } from "react";
import logo from '../assets/img/logoclip.png'
import { FaSearch, FaShoppingBasket, FaShoppingCart } from 'react-icons/fa';

function Header() {
    const [isActive, setActive] = useState(false);
    const [isOpen, setOpen] = useState(false);
    const [isExpanded, setExpanded] = useState(false);
    const [isExpanded1, setExpanded1] = useState(false);

    const handleToggle = () => {
        setActive(!isActive);
        setOpen(false)
    };
    const shopToggle = () => {
        setOpen(!isOpen);
    };
    const optToggle = () => {
        setExpanded(!isExpanded);
    };
    const optToggle1 = () => {
        setExpanded1(!isExpanded1);
    };
    return (
        <header>
            <div class="hamburger" onClick={handleToggle}>
                <div class="line line1"></div>
                <div class="line line2"></div>
                <div class="line line3"></div>
            </div>
            <a href="/">
                <img src={logo} alt="Kosmimata" />
            </a>
            <div class="menu">
                <ul className="flex align-center">
                    <nav className={isActive ? "show flex align-center" : 'flex align-center'}>
                        <div id="leaveMenu" onClick={handleToggle}>
                            <div class="line line1"></div>
                            <div class="line line2"></div>
                        </div>
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>
                            <span>
                                <a onClick={shopToggle}>Shop</a>
                                <div className={isOpen ? "hover show" : 'hover'}>
                                    <div class="categories section">
                                        <h3 onClick={optToggle}>Categories</h3>
                                        <ul className={isExpanded ? "show" : null}>
                                            <li><a href="/rings">Rings</a></li>
                                            <li><a href="/necklaces">Necklaces + Pendants</a></li>
                                            <li><a href="/earrings">Earrings</a></li>
                                            <li><a href="/bracelets">Bracelets + Anklets</a></li>
                                            <li><a href="/wedding">Wedding</a></li>
                                            <li><a href="/mens">Men's</a></li>
                                        </ul>
                                    </div>
                                    <div class="holiday section">
                                        <h3 onClick={optToggle1}>Holiday</h3>
                                        <ul className={isExpanded1 ? "show" : null}>
                                            <li><a>Gifts under $150</a></li>
                                            <li><a>Gifts Under $250</a></li>
                                            <li><a>Gifts Under $500</a></li>
                                            <li><a>Gifts Over $500</a></li>
                                            <li><a>Gifts for Him</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </span>
                        </li>
                        <li>
                            <a href="/blog">Blog</a>
                        </li>
                    </nav>
                    <li>
                        <FaSearch />
                    </li>
                    <li>
                        <FaShoppingCart />
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default Header
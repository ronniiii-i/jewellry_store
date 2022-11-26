import logo from '../assets/img/logoclip.png'
import { FaSearch, FaShoppingBasket, FaShoppingCart } from 'react-icons/fa';

function Header() {
    return (
        <header>
            <div class="hamburger">
                <div class="line line1"></div>
                <div class="line line2"></div>
                <div class="line line3"></div>
            </div>
            <a href="/">
                <img src={logo} alt="Kosmimata" />
            </a>
            <div class="menu">
                <ul className="flex align-center">
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <span>
                            <a>Shop</a>
                            <div className="hover">
                                <div class="categories section">
                                    <h3>Categories</h3>
                                    <ul>
                                        <li><a href="/rings">Rings</a></li>
                                        <li><a href="/necklaces">Necklaces + Pendants</a></li>
                                        <li><a href="/earrings">Earrings</a></li>
                                        <li><a href="/bracelets">Bracelets + Anklets</a></li>
                                        <li><a href="/wedding">Wedding</a></li>
                                        <li><a href="/mens">Men's</a></li>
                                    </ul>
                                </div>
                                <div class="holiday section">
                                    <h3>Holiday</h3>
                                    <ul>
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
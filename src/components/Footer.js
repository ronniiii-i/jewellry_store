import { FaChevronRight, FaEnvelope } from 'react-icons/fa'
import logo from '../assets/img/logoclip.png'

function Footer() {
    return (
        <footer>
            <div class="top flex justify-between wrap">
                <div class="site column">
                    <div class="logo">
                        <img src={logo} alt="Kosmimata" />
                    </div>
                    <p>Accessorise yourself with the best there is</p>
                </div>
                <div class="customer column">
                    <h1>Customer Care</h1>
                    <ul>
                        <li><a href="./faq#shipping">Shipping & Returns</a></li>
                        <li><a href="./order-status">Order Status</a></li>
                        <li><a href="./faq#payment">Payment Methods</a></li>
                        <li><a href="./ring-sizer">Ring Sizer</a></li>
                    </ul>
                </div>
                <div class="contact column">
                    <div class="address">
                        <h1>Visit</h1>
                        <p>1985 Bel Meadow Drive,</p>
                        <p>Los Angeles, California</p>
                        <p>90017</p>
                    </div>
                    <div class="email">
                        <a href="mailto:info@kosmimata.com">info@kosmimata.com</a>
                        <a href="tel:+1 213-829-0743">213-829-0743</a>
                    </div>
                </div>
                <div class="sign column">
                    <p>Sign up to have insider info on new arrivals, early access and more.</p>
                    <div class="input">
                        <FaEnvelope />
                        <input type="email" placeholder="Your Email" />
                        <FaChevronRight />
                    </div>
                </div>
            </div>
            <div class="bottom">
                <div class="socials">
                    <a href="./terms&conditions">Terms and Conditions</a>
                    <a href="./privacy-policy">Privacy Policy</a>
                    <a href="./sitemap">Site Map</a>
                    <p>&copy;Kosmimata Inc.</p>
                    <div class="icons">
                        <a href=""><i class="fab fa-instagram"></i></a><a href=""><i class="fab fa-pinterest"></i></a><a href=""><i class="fab fa-twitter"></i></a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer


import React from 'react';
import './style.css';

function Footer() {
    return (
        <div className="Footer">
            <div className="footer-box">
                <h2 className="heading" >KULU</h2>
            </div>

            <div className="footer-box">
                <p className="p">
                    CATEGORY
                </p>

                <ul>
                    <li className="p">
                        Desk Lamps
                    </li>
                    <li className="p">
                        Floor Lamps
                    </li>
                    <li className="p">
                        Table Lamps
                    </li>
                </ul>
            </div>

            <div className="footer-box">
                <p className="p">
                    INFORMATION
                </p>

                <ul>
                    <li className="p">
                        About
                    </li>
                    <li className="p">
                        Shipping & Returns
                    </li>
                    <li className="p">
                        Privacy Policy
                    </li>
                    <li className="p">
                        Terms & Conditions
                    </li>



                </ul>
            </div>

            <div className="footer-box">
                <p className="p">
                    SOCIAL
                </p>
                <ul>
                    <li className="p">
                        Instagram
                </li>
                    <li className="p">
                        Facebook
                </li>
                    <li className="p">
                        Twitter
                </li>
                    <li className="p">
                        Pinterest
                </li>

                </ul>
            </div>

        </div>
    )
}

export default Footer;
import React from "react";
import "../assets/styles/footer.css";
import { LogoBF } from "../assets/images";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <>
            <div className="footer-hdm">
                <div className="footer-left-hdm">
                    <img src={LogoBF} alt="logo" className="logo" />
                </div>
                <div className="footer-right-hdm">
                    <div className="group-list-hdm">
                        <ul>
                            <h3>HOMEPAGE</h3>
                            <a href="#introduction">
                                <li>Product</li>
                            </a>
                            <a href="#function">
                                <li>Function</li>
                            </a>
                            <a href="#protection">
                                <li>Protection</li>
                            </a>
                            <a href="#type">
                                <li>Type Firewall</li>
                            </a>
                        </ul>
                    </div>
                    <div className="group-list-hdm">
                        <ul>
                            <h3>TYPE FIREWALL</h3>
                            <Link to={"/Proxy-firewall"}>
                                <a>
                                    <li>Proxy Firewall</li>
                                </a>
                            </Link>
                            <Link to={"/Packet-filtering"}>
                                <a>
                                    <li>Packet Filtering</li>
                                </a>
                            </Link>
                            <Link to={"/Next-generation"}>
                                <a>
                                    <li>Next Generation</li>
                                </a>
                            </Link>
                        </ul>
                    </div>
                    <div className="group-list-hdm">
                        <ul>
                            <h3>ARTICLES</h3>
                            <Link to={'https://www.niagahoster.co.id/blog/firewall-adalah/'}>
                                <a>
                                    <li>Firewall 1</li>
                                </a>
                            </Link>
                            <Link to={'https://blog.myorbit.id/technology/fungsi-dan-cara-kerja-firewall/'}>
                                <a>
                                    <li>Firewall 2</li>
                                </a>
                            </Link>
                            <Link to={'https://www.sekawanmedia.co.id/blog/firewall-adalah/'}>
                                <a>
                                    <li>Firewall 3</li>
                                </a>
                            </Link>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;

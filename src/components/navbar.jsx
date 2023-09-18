import React, { useState } from "react";
import "../assets/styles/navbar.css";
import { LogoBF } from "../assets/images";
import { Link } from "react-router-dom";

const Navbar = ({ type }) => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    const closeSidebar = () => {
        setSidebarOpen(false);
    };

    switch (type) {
        case "second-navbar":
            return (
                <>
                    <nav className="navbar-mz2">
                        <Link to={"/"}>
                            <img
                                data-aos="fade-up"
                                src={LogoBF}
                                alt="logo4"
                                className="aos-init aos-animate"
                            />
                        </Link>
                        <ul className="navbar-item-mz2" id="list1">
                            <li>
                                <Link to={"/"}>
                                    <a>Beranda</a>
                                </Link>
                            </li>
                            <li>
                                <a href="#article">Article</a>
                            </li>
                            <li>
                                <a href="#article">
                                    <button>Start Now</button>
                                </a>
                            </li>
                        </ul>
                        <div
                            className="btn-toggle"
                            onClick={() => toggleSidebar()}
                        >
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <div
                            className={`${
                                sidebarOpen ? "sidebarOpen" : "sidebare"
                            }`}
                        >
                            <div
                                className="btn-close"
                                onClick={() => closeSidebar()}
                            >
                                x
                            </div>
                            <ul className="navbar-item-mz2">
                                <li>
                                    <Link to={"/"}>
                                        <a>Beranda</a>
                                    </Link>
                                </li>
                                <li>
                                    <a href="#article">Article</a>
                                </li>
                                <li>
                                    <a href="#article">
                                        <button>Start Now</button>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </>
            );
        default:
            return (
                <>
                    <nav className="navbar-mz2">
                        <Link to={"/"}>
                            <img
                                data-aos="fade-up"
                                src={LogoBF}
                                alt="logo4"
                                className="aos-init aos-animate"
                            />
                        </Link>
                        <ul className="navbar-item-mz2" id="list1">
                            <li>
                                <a href="#introduction">Introduction</a>
                            </li>
                            <li>
                                <a href="#function">Function</a>
                            </li>
                            <li>
                                <a href="#protection">Protection</a>
                            </li>
                            <li>
                                <a href="#protection">Type Firewall</a>
                            </li>
                            <li>
                                <a href="#question">Question</a>
                            </li>
                            <li>
                                <a href="#product">
                                    <button>Start Now</button>
                                </a>
                            </li>
                        </ul>
                        <div
                            className="btn-toggle"
                            onClick={() => toggleSidebar()}
                        >
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <div
                            className={`${
                                sidebarOpen ? "sidebarOpen" : "sidebare"
                            }`}
                        >
                            <div
                                className="btn-close"
                                onClick={() => closeSidebar()}
                            >
                                x
                            </div>
                            <ul className="navbar-item-mz2">
                                <li>
                                    <a href="#introduction">Introduction</a>
                                </li>
                                <li>
                                    <a href="#function">Function</a>
                                </li>
                                <li>
                                    <a href="#protection">Protection</a>
                                </li>
                                <li>
                                    <a href="#protection">Type Firewall</a>
                                </li>
                                <li>
                                    <a href="#question">Question</a>
                                </li>
                                <li>
                                    <a href="#product">
                                        <button>Start Now</button>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </>
            );
    }
};

export default Navbar;

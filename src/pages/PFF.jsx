import React from "react";
import "../assets/styles/type.css";
import { Footer, Navbar } from "../components";
import { Firewall1 } from "../assets/images";
import { Link } from "react-router-dom";

const PFF = () => {
    return (
        <>
            <Navbar type={"second-navbar"} />

            <section className="hero-article-blackFire">
                <h1>Packet Filtering</h1>
            </section>

            <section className="section1-article-blackFire" id="informasi">
                <div className="wrapper-description-artikel-blackFire">
                    <p>
                        <Link to={"/"}>
                            <a>Beranda</a>
                        </Link>
                        <a>--- Packet Filtering Firewall</a>
                    </p>
                    <h2 id="article">Explanation</h2>
                    <p>
                        A Packet Filtering Firewall is a network security device
                        that operates at the network layer (Layer 3) of the OSI
                        model. It evaluates individual packets of data as they
                        traverse a network and makes decisions about whether to
                        allow or block them based on a predefined set of rules
                        or criteria. These rules typically consider factors like
                        source and destination IP addresses, source and
                        destination port numbers, and the protocol being used
                        (e.g., TCP, UDP).
                        <br />
                        <br />
                        Packet filtering firewalls are a fundamental component
                        of network security and act as a barrier between an
                        organization's internal network and the external world,
                        such as the internet. They are designed to enforce
                        network security policies by inspecting incoming and
                        outgoing packets and applying access control rules
                        accordingly.
                        <br />
                        <br />
                        While packet filtering firewalls are effective at
                        filtering traffic based on basic attributes, they have
                        limitations. They lack the ability to inspect the
                        contents of packets beyond the header information,
                        making them unable to make decisions based on the actual
                        data being transmitted. Additionally, they do not have
                        the application-awareness capabilities of more advanced
                        firewalls like Next-Generation Firewalls (NGFWs).
                        Despite these limitations, packet filtering firewalls
                        provide an essential layer of security for many networks
                        and are often used in conjunction with other security
                        measures to create a layered defense strategy.
                        <br />
                    </p>
                </div>
            </section>

            <Footer />
        </>
    );
};

export default PFF;

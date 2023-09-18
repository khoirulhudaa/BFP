import React from "react";
import { Link } from "react-router-dom";
import { Firewall3 } from "../assets/images";
import "../assets/styles/type.css";
import { Footer, Navbar } from "../components";

const NGF = () => {
    return (
        <>
            <Navbar type={"second-navbar"} />

            <section className="hero-article-blackFire">
                <h1>Next Generation</h1>
            </section>

            <section className="section1-article-blackFire" id="informasi">
                <div className="wrapper-description-artikel-blackFire">
                    <p>
                        <Link to={"/"}>
                            <a>Beranda</a>
                        </Link>
                        <a>--- Next Generation Firewall</a>
                    </p>
                    <h2 id="article">Explanation</h2>
                    <p>
                        A Next-Generation Firewall (NGFW) is an advanced
                        security device that goes beyond the capabilities of
                        traditional firewalls. It combines basic firewall
                        functions with advanced technologies to protect networks
                        against modern cyber threats. NGFWs can perform deep
                        inspection of network traffic, including the
                        identification of applications, users, and content. This
                        allows administrators to implement more precise security
                        policies based on the type of applications or
                        categories.
                        <br />
                        <br />
                        NGFWs come with additional capabilities, such as
                        intrusion detection and prevention (IDS/IPS), enabling
                        them to detect and take action against cyberattacks.
                        Moreover, NGFWs often feature behavior-based firewalls
                        that monitor network activity to detect anomalies, as
                        well as content filtering capabilities that help control
                        internet access and protect networks from harmful
                        content.
                        <br />
                        <br />
                        With these capabilities, NGFWs empower organizations to
                        enhance their network security, safeguard sensitive
                        data, and respond effectively to the evolving threat
                        landscape.
                        <br />
                    </p>
                </div>
            </section>

            <Footer />
        </>
    );
};

export default NGF;

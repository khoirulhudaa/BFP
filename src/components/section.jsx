import React, { useState } from "react";
import "../assets/styles/section1.css";
import { Firewall2 } from "../assets/images";

const AccordionItem = ({ title, content }) => {
    const [active, setActive] = useState(false);

    const toggleAccordion = () => {
        setActive(!active);
    };

    return (
        <>
            <button
                className={`accordion-mz2 ${active ? "active" : ""}`}
                onClick={toggleAccordion}
            >
                <span>{title}</span>
                <img
                    src="https://images-builder.vercel.app/img/add_section4mz2.svg"
                    alt="icon"
                />
            </button>
            <div
                className="panel-mz2"
                style={{ display: active ? "block" : "none" }}
            >
                {content}
            </div>
        </>
    );
};

const Section1 = () => {
    return (
        <>
            <div className="section-testimoni-mz1" id="introduction">
                <p
                    data-aos="fade-up"
                    className="parag-testi-mz1 aos-init aos-animate"
                >
                    What is a firewall
                </p>
                <h1
                    data-aos="fade-up"
                    className="title-testi-mz1 aos-init aos-animate"
                >
                    Firewall 🔥
                </h1>
                <p
                    data-aos="fade-up"
                    className="parag-testi-mz1 aos-init aos-animate"
                >
                    Lörem ipsum astrobel sar direlig. Kronde est konfoni med
                    kelig.
                </p>
                <br />
                <p
                    data-aos="fade-up"
                    className="body-testti-mz1 aos-init aos-animate"
                >
                    "At Apple, we believe in putting user privacy at the
                    forefront. Firewalls are a critical part of our defense
                    strategy, ensuring that our customers' data remains safe and
                    secure."
                </p>
                <div>
                    <p
                        data-aos="fade-up"
                        className="person-testi-mz1 aos-init aos-animate"
                    >
                        Tim Cook <b>(CEO of Apple)</b>
                    </p>
                    <p
                        data-aos="fade-up"
                        className="brand-testi-mz1 aos-init aos-animate"
                    >
                        Sr. Director, Brand Marketing
                    </p>
                </div>
            </div>

            <hr className="hr" />

            <h1
                data-aos="fade-up"
                className="title-testi-dmf aos-init aos-animate"
            >
                <span className="fw">Firewall</span> function 🧱
            </h1>

            <div className="container-dmf" id="function">
                <div className="child-dmf child-dmf-2">
                    <img
                        data-aos="fade-up"
                        src="https://images-builder.vercel.app/img/ic1dmf.svg"
                        alt="icon"
                        className="aos-init aos-animate"
                    />
                    <h3
                        data-aos="fade-up"
                        className="title-child-dmf aos-init aos-animate"
                    >
                        Data security
                    </h3>
                    <small
                        data-aos="fade-up"
                        className="text-child-dmf aos-init aos-animate"
                    >
                        First, if you frequently access the internet and don't
                        control your traffic activity. So, the greater your
                        chance of being exposed to data hacking by hackers to
                        get your important information.
                    </small>
                </div>
                <div className="child-dmf child-dmf-2">
                    <img
                        data-aos="fade-up"
                        src="https://images-builder.vercel.app/img/ic1dmf.svg"
                        alt="icon"
                        className="aos-init aos-animate"
                    />
                    <h3
                        data-aos="fade-up"
                        className="title-child-dmf aos-init aos-animate"
                    >
                        Blocking Messages
                    </h3>
                    <small
                        data-aos="fade-up"
                        className="text-child-dmf aos-init aos-animate"
                    >
                        Second, You get a mysterious message saying your
                        computer is in danger. If you don't immediately install
                        certain programs, the computer will die in a matter of
                        seconds.
                    </small>
                </div>
                <div className="child-dmf child-dmf-2">
                    <img
                        data-aos="fade-up"
                        src="https://images-builder.vercel.app/img/ic1dmf.svg"
                        alt="icon"
                        className="aos-init aos-animate"
                    />
                    <h3
                        data-aos="fade-up"
                        className="title-child-dmf aos-init aos-animate"
                    >
                        Bandwidth Monitoring
                    </h3>
                    <small
                        data-aos="fade-up"
                        className="text-child-dmf aos-init aos-animate"
                    >
                        The firewall also functions to limit and monitor the
                        bandwidth services that can be used. Furthermore, you
                        can also set limits for each content in the form of
                        images, videos, music or other entertainment.
                    </small>
                </div>
                <div className="child-dmf child-dmf-2">
                    <img
                        data-aos="fade-up"
                        src="https://images-builder.vercel.app/img/ic1dmf.svg"
                        alt="icon"
                        className="aos-init aos-animate"
                    />
                    <h3
                        data-aos="fade-up"
                        className="title-child-dmf aos-init aos-animate"
                    >
                        Access VPN Services
                    </h3>
                    <small
                        data-aos="fade-up"
                        className="text-child-dmf aos-init aos-animate"
                    >
                        access various content or websites that are blocked by
                        the provider. This can certainly increase productivity
                        and the data sharing system that will be implemented.
                    </small>
                </div>
            </div>

            <h1
                data-aos="fade-up"
                className="title-testi-dmf aos-init aos-animate"
            >
                Protection 🛡️
            </h1>

            <div className="container-section6-section6mz4" id="protection">
                <div className="section6-content-section6mz4">
                    <div>
                        <h1
                            data-aos="fade-up"
                            className="section6-title-section6mz4 aos-init aos-animate"
                        >
                            Protection Against Digital Threats
                        </h1>
                        <p
                            data-aos="fade-up"
                            className="section6-body-section6mz4 aos-init aos-animate"
                        >
                            Herox helps businesses in Africa get paid by anyone,
                            anywhere in the world securedly.
                        </p>
                    </div>
                    <img
                        data-aos="fade-up"
                        src={Firewall2}
                        alt="image"
                        className="image-phone-section6mz4 aos-init aos-animate"
                    />
                </div>
            </div>

            <div className="section5-mz1" id="type">
                <p
                    data-aos="fade-up"
                    className="p-section5-body-mz1 aos-init aos-animate"
                >
                    Type Products
                </p>
                <h1
                    data-aos="fade-up"
                    className="title-section5-mz1 aos-init aos-animate"
                >
                    <span className="fw">Firewall</span> Type 🧱
                </h1>
                <br />
                <div className="container-card-mz1">
                    <div className="card-section5-left-mz1">
                        <div className="card-body-mz1">
                            <div>
                                <h1
                                    data-aos="fade-up"
                                    className="aos-init aos-animate"
                                >
                                    Next Generation Firewall
                                </h1>
                                <p
                                    data-aos="fade-up"
                                    className="aos-init aos-animate"
                                >
                                    Lörem ipsum astrobel sar direlig. Kronde est
                                    konfoni med kelig. Terabel pov astrobel sar
                                </p>
                                <br />
                                <button>Let's work</button>
                            </div>
                        </div>
                    </div>
                    <div className="card-section-right-mz1">
                        <div className="card-sections2-mz1">
                            <div className="card-body2-mz1">
                                <div>
                                    <h1
                                        data-aos="fade-up"
                                        className="aos-init aos-animate"
                                    >
                                        Packet Filtering Firewall
                                    </h1>
                                    <p
                                        data-aos="fade-up"
                                        className="aos-init aos-animate"
                                    >
                                        Lörem ipsum astrobel sar direlig. Kronde
                                        est konfoni med kelig. Terabel pov
                                        astrobel sar
                                    </p>
                                    <button>Let's work</button>
                                </div>
                            </div>
                        </div>
                        <div className="card-sections3-mz1">
                            <div className="card-body3-mz1">
                                <div>
                                    <h1
                                        data-aos="fade-up"
                                        className="aos-init aos-animate"
                                    >
                                        Proxy Firewall
                                    </h1>
                                    <p
                                        data-aos="fade-up"
                                        className="aos-init aos-animate"
                                    >
                                        Lörem ipsum astrobel sar direlig. Kronde
                                        est konfoni med kelig. Terabel pov
                                        astrobel sar
                                    </p>
                                    <button>Let's work</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section className="section4-mz2" id="question">
                <h1 className="section4-mz2-title">General questions</h1>
                <p className="section4-mz2-paragh">
                    We tried to answer most common questions, if you have any
                    additional, please get in touch team
                </p>
                <div>
                    <AccordionItem
                        title="What is a firewall?"
                        content="A firewall is a security system used to protect a computer network from external threats, such as hacker attacks, malware, and unauthorized access. It acts as a barrier between the internal and external network."
                    />
                    <AccordionItem
                        title="What are the main functions of a firewall?"
                        content="The primary functions of a firewall are to monitor, control, and filter incoming and outgoing data traffic. It can block unauthorized access, protect sensitive data, and prevent cyberattacks."
                    />
                    <AccordionItem
                        title="What is the difference between hardware-based and software-based firewalls?"
                        content="A hardware-based firewall is a physical device that stands alone and serves as a physical barrier between networks. A software-based firewall is a program installed on a computer system and runs as an application. Both serve the same role in network security but are built differently."
                    />
                    <AccordionItem
                        title="What is an application firewall?"
                        content="An application firewall, also known as Layer 7 firewall, is a type of firewall that can understand specific application protocols and inspect data packets at the application level. It allows for greater control over specific applications and can enforce policies based on those applications."
                    />
                    <AccordionItem
                        title="Why is a firewall important in network security?"
                        content="A firewall is essential in network security because it protects the network from potential external threats that could compromise or steal data. It helps identify and prevent attacks, control access to network resources, and maintain the confidentiality and integrity of data. Therefore, a firewall is a critical defense layer in safeguarding networks and computer systems."
                    />
                </div>
                <div className="section4-bottom">
                    <h1>Still have a questions?</h1>
                    <p>
                        We're sorry we couldn't provide you with the information
                        you were looking for. Please contact us and we'll be
                        happy to help.
                    </p>
                    <button id="contact">
                        <img
                            src="https://images-builder.vercel.app/img/vector_section4mz2.svg"
                            alt="icon"
                        />
                        <span>Contact us</span>
                    </button>
                </div>
            </section>
        </>
    );
};

export default Section1;

import React from "react";
import { Footer, Hero, Navbar, Section1 } from "../components";
import "../index.css";

const Homepage = () => {
    return (
        <>
            {/* Komponen Navbar */}
            <Navbar />

            {/* Komponen Hero */}
            <Hero />

            {/* Komponen Section Content */}
            <Section1 />

            {/* Komponen Footer */}
            <Footer />
        </>
    );
};

export default Homepage;

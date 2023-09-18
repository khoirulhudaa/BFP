import React from 'react'
import { Link } from 'react-router-dom'
import { Firewall2 } from '../assets/images'
import '../assets/styles/type.css'
import { Footer, Navbar } from '../components'

const PF = () => {
  return (
    <>
        <Navbar type={'second-navbar'} />

        <section className="hero-article-blackFire">
            <h1>Proxy Firewall</h1>
        </section>

        <section className="section1-article-blackFire" id="informasi">
            <div className="wrapper-description-artikel-blackFire">
                <p>
                    <Link to={'/'}><a>Beranda</a></Link>
                    <a>--- Proxy-firewall</a>
                </p>
                <h2 id='article'>Explanation</h2>
                <p>
                A Proxy Firewall is a type of firewall that operates at the application layer in a network architecture. 
                It acts as an intermediary between the internal network (typically a LAN) and the external network 
                (usually the internet). 
                Its primary function is to enhance control over data traffic and improve network security. 
                Here's how it works:
                <br />
                <br />
                When there's a request for data or a connection from the internal network, the proxy firewall takes 
                over the request and forwards it to an external server.
                <br />
                <br />
                The external server believes the request is coming from the proxy firewall, not the actual user 
                within the internal network.
                <br />
                <br />
                The proxy firewall examines the request to ensure it complies with the established security policies. 
                If allowed, it forwards the request to the external server.
                <br />
                <br />
                Once the external server responds, the proxy firewall relays the response back to the actual user 
                within the internal network.
                <br />
                <br />
                The advantages of a proxy firewall include enhanced control, as it can inspect packets at the 
                application level, enabling it to identify and control specific applications, protocols, or services. 
                This level of granularity is beneficial for enforcing security policies and protecting the network from 
                potential threats.
                <br />
                </p>
            </div>
        </section>

        <Footer /> 
    </>
  )
}

export default PF

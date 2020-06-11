import React, { Component } from 'react';
import Banner from './Banner';
import Services from './Services';
import Team from './Team';
import ContactUs from './ContactUs';
import SocialMedia from './SocialMedia';
import Footer from './Footer';


class Home extends Component {
    render() {
        return (
            <>
             <Banner /> 
             <Services />
             <Team />
             <ContactUs />
             <SocialMedia />
             <Footer />
            </>
        );
    }
}

export default Home;
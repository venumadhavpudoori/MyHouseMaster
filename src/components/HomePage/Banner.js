import React, { Component } from 'react';
import keys from '../../assets/keys.jpg';

class Banner extends Component {
    render() {
        return (
            <>
            <div id="home" style={{ 
            marginTop:"50px" ,   
            backgroundImage:`url(${keys})`,
            backgroundRepeat:"no-repeat",
            backgroundPosition:"center center",
            backgroundSize:"cover",
            height:"100vh"}} >
            </div>
            </>
        );
    }
}

export default Banner;
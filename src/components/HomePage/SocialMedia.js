import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.min.css';

import './SocialMedia.css';

class SocialMedia extends Component {
    render() {
        return (
            <>
            <div className="social-media">
            <ul>
            <li>
            <a href="#"><i className="fa fa-twitter"></i></a>
            </li>

            <li>
            <a href="#"><i className="fa fa-facebook-square"></i></a>
            </li>

            <li>
            <a href="#"><i className="fa fa-google"></i></a>
            </li>

            <li>
            <a href="#"><i className="fa fa-instagram"></i></a>
            </li>

            <li>
            <a href="#"><i className="fa fa-linkedin-square"></i></a>
            </li>
            </ul> 
            </div> 
            </>
        );
    }
}

export default SocialMedia;
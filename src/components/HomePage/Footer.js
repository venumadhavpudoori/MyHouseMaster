import React, { Component } from 'react';
const footerImg = require('../../assets/footer.png');

class Footer extends Component {
    render() {
        return (
            <>
            <footer>
            <div class="row">
                <div class="col-lg-12">
                     <img class="img-fluid" src={footerImg} alt="alternative" />
                </div>
            </div>
            </footer>
            </>
        );
    }
}

export default Footer;
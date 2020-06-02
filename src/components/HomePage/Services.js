import React, { Component } from 'react';
import './Services.css';

const rentImg = require('../../assets/propertymanagement.jpg');
const endtoendImg = require('../../assets/endtoend.png');
const searchhomeImg = require('../../assets/searchhome.png');
const agreementImg = require('../../assets/onlineagreement.png');

class Services extends Component {
    render() {
        return (
            <div>
             <section id="services">
                <div className="container">
                   <div className="row">
                      <div className="col-lg-12">
                         <div className="section-heading">Services</div>
                      </div>
                   </div>
                </div>

    <div id="product-intro">
        <div className="container">
            <div className="row">
            <div className="col-lg-6">
                    <div className="text-container">
                        <div className="section-title">Rental Mangement</div><br/>
                        <p>House owner contacts HouseWise representative and authorizes him/her to rent out the property(flat/bunglow) on the house owner's behal</p>
                    </div> 
                </div>
                <div className="col-lg-6">
                    <div className="image-container">
                        <img className="img-fluid" src={rentImg} alt="alternative" />
                    </div> 
                </div> 
            </div> 
        </div> 
    </div> 

    <div id="product-intro">
        <div className="container">
            <div className="row">
             <div className="col-lg-6">
                    <div className="image-container">
                        <img className="img-fluid" src={endtoendImg} alt="alternative" />
                    </div> 
                </div> 
            <div className="col-lg-6">
                    <div className="text-container">
                        <div className="section-title">End to End Services</div><br/>
                        <p>House owner hands over keys and relevant property documents to the HouseWise representative</p>
                    </div> 
                </div>
            </div> 
        </div> 
    </div>

    <div id="product-intro">
        <div className="container">
            <div className="row">
            <div className="col-lg-6">
                    <div className="text-container">
                        <div className="section-title">Property Management</div><br/>
                        <p>House owner contacts HouseWise representative and authorizes him/her to rent out the property(flat/bunglow) on the house owner's behalf</p>
                    </div> 
                </div>
                <div className="col-lg-6">
                    <div className="image-container">
                        <img className="img-fluid" src={searchhomeImg} alt="alternative" />
                    </div> 
                </div> 
            </div> 
        </div> 
    </div>

    <div id="product-intro">
        <div className="container">
            <div className="row">
             <div className="col-lg-6">
                    <div className="image-container">
                        <img className="img-fluid" src={agreementImg} alt="alternative" />
                    </div> 
                </div> 
            <div className="col-lg-6">
                    <div className="text-container">
                        <div className="section-title">Online Rent Agreement</div><br/>
                         <p>House owner hands over keys and relevant property documents to the HouseWise representative.<br/>
                          a) Tenant transfers monthly rent to house owner's account.<br/>
                          b) HouseWise continues to maintain property till end of the lease.</p>
                    </div> 
                </div>
            </div> 
        </div> 
    </div>
            </section>
            </div>
        );
    }
}

export default Services;
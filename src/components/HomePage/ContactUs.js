import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.min.css';
import './ContactUs.css';

class ContactUs extends Component {
    render() {
        return (
            <>
            <section id="contactUs" >      
                <div className="container">
        <div className="row">
         <div className="col-lg-12">
          <div className="contact-heading">Contact Us</div>
          </div>
         </div>
          <div className="row"> 
          <div className="col-md-6">
                <h6 className="contact-column-headings">About Us</h6><br/><br/>
                      <div className="contact-links">
                      <i className="fa fa-envelope fa-2x"></i>
                      <div className="contact-text">
                          <p>Email</p>
                          <p>ramakanth473@gmail.com</p>
                      </div>   
                      </div>
                      <div className="contact-links"> 
                      <i className="fa fa-phone fa-2x"></i>&nbsp;
                      <div className="contact-text">
                           <p> Phone </p>
                           <p>+49 176 78945632</p>
                      </div>
                      </div>
                      <div className="contact-links">
                      <i className="fa fa-map-marker fa-2x"></i>&nbsp;&nbsp;&nbsp;
                      <div className="contact-text">
                           <p> Location</p>
                          <p>Hyderabad </p>
                      </div>
                      </div>
                      <div className="contact-links">
                      <i className="fa fa-address-book fa-2x"></i>
                      <div className="contact-text">
                           <p> Address</p>
                          <p>1-0-23 Jubile Hills, Hyderabad </p>
                      </div>
                      </div><br/><br/><br/><br/><br/>                
            </div>         
            <div className="col-md-6">
                <h6 className="contact-column-headings">Contact Form</h6><br/>
                <form id="contactForm">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="form-group">
                        First Name
                        <input type="text" className="form-control" id="name" name="name" placeholder="First Name" required data-error="Please enter your name" />
                        <div className="help-block with-errors"></div>
                      </div>                                 
                    </div>

                     <div className="col-md-12">
                      <div className="form-group">
                        Last Name
                        <input type="text" placeholder="Last Name" id="email" className="form-control" name="email" required data-error="Please enter your email" />
                        <div className="help-block with-errors"></div>
                      </div>
                      </div>

                    <div className="col-md-12">
                      <div className="form-group">
                        Email Address
                        <input type="text" placeholder="Email Address" id="email" className="form-control" name="email" required data-error="Please enter your email" />
                        <div className="help-block with-errors"></div>
                      </div> 
                    </div>
                    <div className="col-md-12">
                      <div className="form-group"> 
                        Message
                        <textarea className="form-control" id="message" placeholder="Message" rows="5" data-error="Write your message" required></textarea>
                        <div className="help-block with-errors"></div>
                      </div>
                      <div className="submit-button">
                        <button className="btn btn-success" id="submit" type="submit" style={{float:"right"}}>Submit</button>
                        <div id="msgSubmit" className="h3 text-center hidden"></div> 
                        <div className="clearfix"></div> 
                      </div>
                    </div>
                  </div>            
                </form>
            </div>
          </div>
        </div>
    </section>
            </>
        );
    }
}

export default ContactUs;
import React, { Component } from 'react';
import './Team.css'
const ramakanthImg = require('../../assets/ramakanth.jpg');
const bhargaviImg = require('../../assets/bhargavi.jpg');

class Team extends Component {
    render() {
        return (
            <div>
                  <section id="Team">
                <div className="container">
                   <div className="row">
                      <div className="col-lg-12">
                         <div className="Team-heading">Team</div>
                      </div>
                   </div>
                </div>

        <div className="container">
            <div className="row">
            <div className="col-lg-4">
                    <div className="content">
                        <img src={ramakanthImg} alt="alternative" />
                        <div className="text">
                        <h5>Ramakanth Reddy</h5>
                        <p>Software Developer</p>
                        </div> 
                    </div> 
                </div> 
            <div className="col-lg-8">
                    <div className="text-left">
                        <p>Researching, designing, implementing and managing software programs.
                        Identifying areas for modification in existing programs and subsequently developing these modifications.</p>
                    </div> 
                </div>
            </div> 
        </div> 

        <div className="container">
            <div className="row" style={{marginTop:"50px"}}>
            <div className="col-lg-4">
                    <div className="content">
                        <img src={bhargaviImg} alt="alternative" />
                        <div className="text"> 
                        <h5>Bhargavi Beesu</h5>
                        <p>Software Developer</p>
                        </div> 
                    </div> 
            </div> 
            <div className="col-lg-8">
                    <div className="text-left">
                        <p>Researching, designing, implementing and managing software programs.
                        Identifying areas for modification in existing programs and subsequently developing these modifications.</p>
                    </div> 
                </div>
            </div> 
        </div> 
    </section>
            </div>
        );
    }
}

export default Team;
import React, { useEffect, useState } from "react";
import './Style.css';
import { useNavigate } from 'react-router-dom';
import index1 from '../assets/index/index1.png';
import index2 from '../assets/index/index2.png';
import SwingCounter from '../items/SwingCounter.js';

function Index(){
    //Homepage Navigation
    const navigate = useNavigate();

    const handleclick1 = () => {
        navigate('/createacc');
    }

    const handleclick2 = () => {
        navigate('/login');
    }


    return(
        <div>
            <nav class="navbar navbar-expand-lg fixed-top navbar-dark">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">CAREER CATALYST</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarText">
                    <ul class="navbar-nav mb-2 mb-lg-0 ms-auto d-inline-flex justify-content-end">
                        <li class="nav-item">
                            <a class="nav-link" onClick={handleclick1}>Sign&nbsp;Up</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" onClick={handleclick2}>Log&nbsp;In</a>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>

            <div className="bg cover-container d-flex w-100 h-100 mx-auto flex-column">
                <div class="row">
                    <div class="col-md-12 text-left">
                    <h1 className="main-header">WELCOME TO CAREER CATALYST</h1>
                        <p className="main-subheader">Unlock your potential and seize every opportunity with us – your personalized gateway to career success</p>
                    </div>
                    <div class="col-md-12 text-left">
                        <p className="main-subheader2">Embraced by countless companies and employees globally.</p>
                    </div>
                </div>
            </div>

            <div class="counter container d-flex w-100 h-100 mx-auto flex-column" id="container_index">
                <div class="row">
                    <div class="col-md-6 float-left">
					    <h2 className="count-header">Hundreds of<br />Career Paths <br/></h2>
                        <p className="count-subheader"><br/>For expedited processing, upload your resume or CV to our website and move one step closer to realizing your career goals. In addition to extracting and clearly displaying your current abilities on your profile, our platform offers tailored recommendations to assist you in finding and acquiring any skills you might be lacking. Present your credentials, experience, and desire to learn in one easy-to-access location.</p>
                    </div>
                    <div class="col-md-6">
                        <img src={index1} class="float-right" alt="..."></img>
                    </div>
                </div>
            </div>

            <div class="row">
                <div className="col-md-6">
                    <img src={index2} alt="..."></img>
                </div>
                <div className="col-md-5 count2">
                    <h2 className="count-header2">Thousands of<br />Online<br />COURSES</h2>
                    <p className="count-subheader2">Upload your CV or Resume to our platform for streamlined processing and take the next step towards your dream career. Not only will your existing skills be extracted and prominently displayed on your profile, but our platform also provides personalized recommendations to help you identify and learn the skills you may be missing. Showcase your qualifications, expertise, and eagerness to grow, all in one convenient place.</p>
                </div>
            </div>
                   

        </div>
    )
}

export default Index;
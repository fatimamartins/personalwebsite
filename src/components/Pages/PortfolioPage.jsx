import React from 'react';

import Maintenance from '../SVG/maintenance'

const PortfolioPage = () => (
    <div className="portfolio-page">
        <h3>Portfolio</h3>

        <div className="portfolio-page__works">
            <h4>Professional Work</h4>
            <div className="d-flex flex-wrap">
                <div className="card">
                    <div className="card__side card__side--front">
                        <div className="card__picture card__picture-bookasleeper">
                            <Maintenance/>
                            <h4 className="card__heading">Bookasleeper</h4>
                        </div>
                    </div>
                    <div className="card__side card__side--back card__side--back-1">
                        <div>
                            <p>Bookasleeper is a platform for buying night train tickets</p>
                            <p>HTML, CSS, JavaScript, React, Node.js, MongoDB, Jest, Cypress Git, Tailwind , Zeplin</p>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card__side card__side--front">
                        <div className="card__picture card__picture-habitects">
                            <h4 className="card__heading">Habitects</h4>
                        </div>
                    </div>
                    <div className="card__side card__side--back card__side--back-2">
                        <div>
                            <p>Habitects is an e-commerce platform for the sanitary sector in Switzerland.</p>
                            <p>Technologies used: HTML, CSS, Sass, Bootstrap, jQuery, React, Git, Sketch.</p>
                        </div>
                        <a href="https://www.habitects.ch" target="_blank" className="btn btn--white">Check it out</a>
                    </div>
                </div>
            </div>
        </div>

        <div className="portfolio-page__works">
            <h4>School Works</h4>
            <div className="d-flex flex-wrap">
                <div className="card">
                    <div className="card__side card__side--front">
                        <div className="card__picture card__picture-omnifood">
                            <h4 className="card__heading">Omnifood</h4>
                        </div>
                    </div>
                    <div className="card__side card__side--back card__side--back-1">
                        <div>
                            <p>Landing page for a fictional company - Omnifood - a premium food delivery service;</p>
                            <p>Introduction to HTML5, CSS3 and responsive website design;</p>
                            <p>jQuery effects like animations and sticky navigation;</p>
                            <p>Web Design basic concepts;</p>
                        </div>
                        <a href="#" target="_blank" className="btn btn--white">Check it out</a>
                    </div>
                </div>
                <div className="card">
                    <div className="card__side card__side--front">
                        <div className="card__picture card__picture-pigGame">
                            <h4 className="card__heading">Pig Game</h4>
                        </div>
                    </div>
                    <div className="card__side card__side--back card__side--back-1">
                        <div>
                            <div>
                                <p>The Pig game is a simple dice game.</p>
                                <a href="https://en.wikipedia.org/wiki/Pig_(dice_game)" target="_blank">Find more here!</a>
                            </div>
                            <p>Javascript in the browser: DOM Manipulation and Event Handling;</p>
                            <p>DRY principle;</p>
                        </div>
                        <a href="#" target="_blank" className="btn btn--white">Let's play?</a>
                    </div>
                </div>
                <div className="card">
                    <div className="card__side card__side--front">
                        <div className="card__picture card__picture-budgety">
                            <h4 className="card__heading">Budget App</h4>
                        </div>
                    </div>
                    <div className="card__side card__side--back card__side--back-2">
                        <div>
                            <p>The Budget App it's a fictional application to manage our personal finance life</p>
                            <p>Introduction to Module Pattern, Encapsulation and Event Delegation </p>
                            <p>How to read data from different HTML input types</p>
                        </div>
                        <a href="#" target="_blank" className="btn btn--white">Check it out</a>
                    </div>
                </div>
                <div className="card">
                    <div className="card__side card__side--front">
                        <div className="card__picture card__picture-forkify">
                            <h4 className="card__heading">Forkify</h4>
                        </div>
                    </div>
                    <div className="card__side card__side--back card__side--back-1">
                        <div>
                            <p>Forkify is a food recipe application build using food2fork API </p>
                            <p>Introduction to MCV Architecture, ES6 Modules and Classes, Local Storage, Error Handling, Application State and REST-API</p>
                        </div>
                        <a href="#" target="_blank" className="btn btn--white">Check it out</a>
                    </div>
                </div>
                <div className="card">
                    <div className="card__side card__side--front">
                        <div className="card__picture card__picture-natours">
                            <h4 className="card__heading">Natours</h4>
                        </div>
                    </div>
                    <div className="card__side card__side--back card__side--back-1">
                        <div>
                            <p>Introduction to SASS: Variables, Nesting, Mixins, Extends, Functions and The 7-1 Pattern;</p>
                            <p>Advanced CSS: Skew, object-fit, translate, perspective, clip-path, outline-offset, filter and others; </p>
                            <p>{`New HTML tags and attributes: <picture> <img srcset=" "> <video>`}</p>
                        </div>
                        <a href="#" target="_blank" className="btn btn--white">Check it out</a>
                    </div>
                </div>
                <div className="card">
                    <div className="card__side card__side--front">
                        <div className="card__picture card__picture-trillo">
                            <h4 className="card__heading">Trillo</h4>
                        </div>
                    </div>
                    <div className="card__side card__side--back card__side--back-1">
                        <div>
                            <p>Introduction to Flexbox;</p>
                            <p>Advanced Flexbox properties for positioning and alignment;</p>
                            <p>SVG icons Vs font icons;</p>
                        </div>
                        <a href="#" target="_blank" className="btn btn--white">Check it out</a>
                    </div>
                </div>
            </div>
        </div>
        <div className="white-bar-to-continue-reading"></div>
    </div>
);

export default PortfolioPage;
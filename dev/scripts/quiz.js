import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Result from './result';
import ProgressBar from './progressBar';

class Quiz extends React.Component {
    render() {
        return (
            <section className="quiz">
                <section className="q q1">
                    <h3>Choose a companion</h3>
                    <div className="leftSide">
                        <a href="#" className="answer sushi imgHolder">
                            <img src="public/assets/cat.jpg" alt=""/>
                        </a>
                        <a href="#" className="answer sushi text">
                            <p>cat</p>
                        </a>
                    </div>
                    <div className="rightSide">
                        <a href="#" className="answer taco imgHolder">
                            <img src="public/assets/dog.jpg" alt=""/>
                        </a>
                        <a href="#" className="answer taco text">
                            <p>dog</p>
                        </a>
                    </div>
                </section>
                <section className="q q2">
                    <h3>Last Saturday night, you...</h3>
                        <div className="leftSide">
                            <a href="#" className="answer taco imgHolder">
                                <img src="public/assets/party.jpg" alt=""/>
                            </a>
                            <a href="#" className="answer taco text">
                                <p>Partied</p>
                            </a>
                        </div>
                        <div className="rightSide">
                            <a href="#" className="answer sushi imgHolder">
                                <img src="public/assets/laze.jpg" alt=""/>
                            </a>
                            <a href="#" className="answer sushi text">
                                <p>Stayed In</p>
                            </a>
                        </div>
                </section>
                <section className="q q3">
                    <h3>Summer or Winter?</h3>
                        <div className="leftSide">
                            <a href="#" className="answer taco imgHolder">
                                <img src="public/assets/summer.jpg" alt=""/>
                            </a>
                            <a href="#" className="answer taco text">
                                <p>Summer</p>
                            </a>
                        </div>
                        <div className="rightSide">
                            <a href="#" className="answer sushi imgHolder">
                                <img src="public/assets/winter.jpg" alt=""/>
                            </a>
                            <a href="#" className="answer sushi text">
                                <p>Winter</p>
                            </a>
                        </div>
                </section>
                <section className="q q4">
                    <h3>Shaken or Stirred?</h3>
                        <div className="leftSide">
                            <a href="#" className="answer taco imgHolder">
                                <img src="public/assets/shaken.gif" alt="" className="shaken"/>
                            </a>
                            <a href="#" className="answer taco text">
                                <p>Shaken</p>
                            </a>
                        </div>
                        <div className="rightSide">
                            <a href="#" className="answer sushi imgHolder">
                                <img src="public/assets/stirred.gif" alt=""/>
                            </a>
                            <a href="#" className="answer sushi text">
                                <p>Stirred</p>
                            </a>
                        </div>
                </section>
                <section className="q q5">
                    <h3>Do you work well under pressure?</h3>
                        <div className="leftSide">
                            <a href="#" className="answer sushi imgHolder">
                                <img src="public/assets/cool.jpg" alt=""/>
                            </a>
                            <a href="#" className="answer sushi text">
                                <p>Totes</p>
                            </a>
                        </div>
                        <div className="rightSide">
                            <a href="#" className="answer taco imgHolder">
                                <img src="public/assets/sad.jpg" alt=""/>
                            </a>
                            <a href="#" className="answer taco text">
                                <p>Noop</p>
                            </a>
                        </div>
                </section>
                <section className="q q6">
                    <h3>Introvert or Extrovert?</h3>
                        <div className="leftSide">
                            <a href="#" className="answer sushi imgHolder">
                                <img src="public/assets/dont.jpg" alt=""/>
                            </a>
                            <a href="#" className="answer sushi text">
                                <p>Introvert</p>
                            </a>
                        </div>
                        <div className="rightSide">
                            <a href="#" className="answer taco imgHolder">
                                <img src="public/assets/hay.jpg" alt=""/>
                            </a>
                            <a href="#" className="answer taco text">
                                <p>Extrovert</p>
                            </a>
                        </div>
                </section>
                <section className="q q7">
                    <h3>Pushasaur or Pushmander</h3>
                        <div className="leftSide">
                            <a href="#" className="answer sushi imgHolder">
                                <img src="public/assets/bulba.jpg" alt=""/>
                            </a>
                            <a href="#" className="answer sushi text">
                                <p>Pushasaur</p>
                            </a>
                        </div>
                        <div className="rightSide">
                            <a href="#" className="answer taco imgHolder">
                                <img src="public/assets/char.jpg" alt=""/>
                            </a>
                            <a href="#" className="answer taco text">
                                <p>Pushmander</p>
                            </a>
                        </div>
                        <a href="#" className="submit">Submit!</a>
                </section>
                <ProgressBar />
            </section>
        )
    }
}

export default Quiz;
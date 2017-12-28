import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Result from './result';
import ProgressBar from './progressBar';

class Quiz extends React.Component {
    constructor() {
        super();
        this.state = {
            questionsAnswered: 0,
            q1: "notAnswered",            
            q2: "notAnswered",            
            q3: "notAnswered",            
            q4: "notAnswered",            
            q5: "notAnswered",            
            q6: "notAnswered",            
            q7: "notAnswered",
            divStyle: {
                transition: "top 1s ease-in",
                top: "0vh"
            }      
        }
        this.question1Answered = this.question1Answered.bind(this);
        this.question2Answered = this.question2Answered.bind(this);
        this.question3Answered = this.question3Answered.bind(this);
        this.question4Answered = this.question4Answered.bind(this);
        this.question5Answered = this.question5Answered.bind(this);
        this.question6Answered = this.question6Answered.bind(this);
        this.question7Answered = this.question7Answered.bind(this);
        this.flyAway = this.flyAway.bind(this);
    }
    
    
    flyAway() {
        this.setState({
            divStyle: {
                transition: "top 1s ease-in",
                top: "-100vh"
            }     
        })
    }
    // updateProgress() {
    //     q1 = document.getElementsByClassName("q1");
    //     q2 = document.getElementsByClassName("q2");
    //     q3 = document.getElementsByClassName("q3");
    //     q4 = document.getElementsByClassName("q4");
    //     q5 = document.getElementsByClassName("q5");
    //     q6 = document.getElementsByClassName("q6");
    //     q7 = document.getElementsByClassName("q7");
        
    //     if (q1.classList.contains("answered")) {
    //         console.log("question 1 answered");
    //         this.setState({
    //             questionsAnswered: 1
    //         })
    //     }
    //     if (q2.classList.contains("answered")) {
    //         console.log("question 2 answered");
    //         this.setState({
    //             questionsAnswered: 2
    //         })
    //     }
    //     if (q3.classList.contains("answered")) {
    //         console.log("question 3 answered");
    //         this.setState({
    //             questionsAnswered: 3
    //         })
    //     }
    //     if (q4.classList.contains("answered")) {
    //         console.log("question 4 answered");
    //         this.setState({
    //             questionsAnswered: 4
    //         })
    //     }
    //     if (q1.classList.contains("answered")) {
    //         console.log("question 1 answered");
    //         this.setState({
    //             questionsAnswered: 1
    //         })
    //     }
    //     if (q1.classList.contains("answered")) {
    //         console.log("question 1 answered");
    //         this.setState({
    //             questionsAnswered: 1
    //         })
    //     }
    //     if (q1.classList.contains("answered")) {
    //         console.log("question 1 answered");
    //         this.setState({
    //             questionsAnswered: 1
    //         })
    //     }

    // }
    
    question1Answered() {
        console.log("question 1 answered");
        const q1 = document.getElementsByClassName("q1");
        this.setState({
            questionsAnswered: 1,
            q1: "answered"
        })
        this.flyAway();
        // const q1 = document.getElementsByClassName('q1');
        // q1.classList.add('flyAway');
    }
    question2Answered() {
        console.log("question 2 answered");
        this.setState({
            questionsAnswered: 2
        })
    }
    question3Answered() {
        console.log("question 3 answered");
        this.setState({
            questionsAnswered: 3
        })
    }
    question4Answered() {
        this.setState({
            questionsAnswered: 4
        })
    }
    question5Answered() {
        this.setState({
            questionsAnswered: 5
        })
    }
    question6Answered() {
        this.setState({
            questionsAnswered: 6
        })
    }
    question7Answered() {
        this.setState({
            questionsAnswered: 7
        })
    }

    render() {
        return (
            <section className="quiz">
                {console.log(this.state.q1)}
                <section className="q q1 {this.state.q1}" style={this.state.divStyle}>
                    {console.log(this.state.q1)}
                    <h3>Choose a companion</h3>
                    <div className="leftSide">
                        <a href="#" className="answer sushi imgHolder" onClick={this.question1Answered}>
                            <img src="public/assets/cat.jpg" alt=""/>
                        </a>
                        <a href="#" className="answer sushi text" onClick={this.question1Answered}>
                            <p>cat</p>
                        </a>
                    </div>
                    <div className="rightSide">
                        <a href="#" className="answer taco imgHolder" onClick={this.question1Answered}>
                            <img src="public/assets/dog.jpg" alt=""/>
                        </a>
                        <a href="#" className="answer taco text" onClick={this.question1Answered}>
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
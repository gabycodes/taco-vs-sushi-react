import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Result from './result';
import ProgressBar from './progressBar';

class Quiz extends React.Component {
    constructor(props) {
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
            progressBar: false
        }
        this.question1Answered = this.question1Answered.bind(this);
        this.question2Answered = this.question2Answered.bind(this);
        this.question3Answered = this.question3Answered.bind(this);
        this.question4Answered = this.question4Answered.bind(this);
        this.question5Answered = this.question5Answered.bind(this);
        this.question6Answered = this.question6Answered.bind(this);
        this.question7Answered = this.question7Answered.bind(this);
        this.hideProgressBar = this.hideProgressBar.bind(this);
        this.showSubmitButton = this.showSubmitButton.bind(this);
        this.finishQuiz = this.finishQuiz.bind(this);
    }
    hideProgressBar() {
        console.log("hiding progress bar...");
        const progressBar = document.getElementsByClassName("progressBarHolder")[0];
        progressBar.style.bottom = "0vh";
    }
    question1Answered(team) {
        this.setState({
            questionsAnswered: 1,
            q1: "answered"
        })
        this.props.scoreKeeper(team);
        const progressBar = document.getElementsByClassName("progress")[0];
        progressBar.style.width = "14.28%";
    }
    question2Answered(team) {
        this.setState({
            questionsAnswered: 2,
            q2: "answered"
        })
        this.props.scoreKeeper(team);
        const progressBar = document.getElementsByClassName("progress")[0];
        progressBar.style.width = "28.57%";
        progressBar.style.backgroundColor = "tomato";
    }
    question3Answered(team) {
        this.setState({
            questionsAnswered: 3,
            q3: "answered"
        })
        this.props.scoreKeeper(team);
        const progressBar = document.getElementsByClassName("progress")[0];
        progressBar.style.width = "42.84%";
        progressBar.style.backgroundColor = "rgb(48, 126, 25)";
    }
    question4Answered(team) {
        this.setState({
            questionsAnswered: 4,
            q4: "answered"
        })
        this.props.scoreKeeper(team);
        const progressBar = document.getElementsByClassName("progress")[0];
        progressBar.style.width = "57.12%";
        progressBar.style.backgroundColor = "rgb(48, 126, 25)";
    }
    question5Answered(team) {
        this.setState({
            questionsAnswered: 5,
            q5: "answered"
        })
        this.props.scoreKeeper(team);
        const progressBar = document.getElementsByClassName("progress")[0];
        progressBar.style.width = "71.4%";
        progressBar.style.backgroundColor = "rgb(255, 123, 0)";
    }
    question6Answered(team) {
        this.setState({
            questionsAnswered: 6,
            q6: "answered"
        })
        this.props.scoreKeeper(team);
        const progressBar = document.getElementsByClassName("progress")[0];
        progressBar.style.width = "85.68%";
        progressBar.style.backgroundColor = "rgb(128, 163, 0)";
    }
    question7Answered(team) {
        this.setState({
            questionsAnswered: 7
            // q7: "answered"
        })
        this.props.scoreKeeper(team);
        const progressBar = document.getElementsByClassName("progress")[0];
        progressBar.style.width = "100%";
        progressBar.style.backgroundColor = "rgb(204, 5, 5)";
    }
    showSubmitButton() {
        const submit = document.getElementsByClassName("submit")[0];
        submit.style.right = "calc(10rem + 14%)";
    }
    finishQuiz() {
        this.setState({
            q7: "answered"
        })
        const submit = document.getElementsByClassName("submit")[0];
        submit.style.transition = "top 1s ease-in";
        submit.style.top = "-25vh";
    }
    render() {
        return (
            <section className="quiz">
                <section className={`q q1 ${this.state.q1}`}>
                    <h3>Choose a companion</h3>
                    <div className="leftSide">
                        <a href="#" className="answer sushi imgHolder" onClick={() => this.question1Answered("sushi")}>
                            <img src="public/assets/cat.jpg" alt=""/>
                        </a>
                        <a href="#" className="answer sushi text" onClick={() => this.question1Answered("sushi")}>
                            <p>cat</p>
                        </a>
                    </div>
                    <div className="rightSide">
                        <a href="#" className="answer taco imgHolder" onClick={() => this.question1Answered("taco")}>
                            <img src="public/assets/dog.jpg" alt=""/>
                        </a>
                        <a href="#" className="answer taco text" onClick={() => this.question1Answered("taco")}>
                            <p>dog</p>
                        </a>
                    </div>
                </section>
                <section className={`q q2 ${this.state.q2}`}>
                    <h3>Last Saturday night, you...</h3>
                        <div className="leftSide">
                            <a href="#" className="answer taco imgHolder"  onClick={() => this.question2Answered("taco")}>
                                <img src="public/assets/party.jpg" alt=""/>
                            </a>
                            <a href="#" className="answer taco text"  onClick={() => this.question2Answered("taco")}>
                                <p>Partied</p>
                            </a>
                        </div>
                        <div className="rightSide">
                            <a href="#" className="answer sushi imgHolder"  onClick={() => this.question2Answered("sushi")}>
                                <img src="public/assets/laze.jpg" alt=""/>
                            </a>
                            <a href="#" className="answer sushi text"  onClick={() => this.question2Answered("sushi")}>
                                <p>Stayed In</p>
                            </a>
                        </div>
                </section>
                <section className={`q q3 ${this.state.q3}`}>
                    <h3>Summer or Winter?</h3>
                        <div className="leftSide">
                            <a href="#" className="answer taco imgHolder" onClick={() => this.question3Answered("taco")}>
                                <img src="public/assets/summer.jpg" alt=""/>
                            </a>
                            <a href="#" className="answer taco text" onClick={() => this.question3Answered("taco")}>
                                <p>Summer</p>
                            </a>
                        </div>
                        <div className="rightSide">
                            <a href="#" className="answer sushi imgHolder" onClick={() => this.question3Answered("sushi")}>
                                <img src="public/assets/winter.jpg" alt="" />
                            </a>
                            <a href="#" className="answer sushi text" onClick={() => this.question3Answered("sushi")}>
                                <p>Winter</p>
                            </a>
                        </div>
                </section>
                <section className={`q q4 ${this.state.q4}`}>
                    <h3>Shaken or Stirred?</h3>
                        <div className="leftSide">
                            <a href="#" className="answer taco imgHolder" onClick={() => this.question4Answered("sushi")}>
                                <img src="public/assets/shaken.gif" alt="" className="shaken"/>
                            </a>
                            <a href="#" className="answer taco text" onClick={() => this.question4Answered("sushi")}>
                                <p>Shaken</p>
                            </a>
                        </div>
                        <div className="rightSide">
                            <a href="#" className="answer sushi imgHolder" onClick={() => this.question4Answered("taco")}>
                                <img src="public/assets/stirred.gif" alt=""/>
                            </a>
                            <a href="#" className="answer sushi text" onClick={() => this.question4Answered("taco")}>
                                <p>Stirred</p>
                            </a>
                        </div>
                </section>
                <section className={`q q5 ${this.state.q5}`}>
                    <h3>Do you work well under pressure?</h3>
                        <div className="leftSide">
                            <a href="#" className="answer sushi imgHolder"  onClick={() => this.question5Answered("sushi")}>
                                <img src="public/assets/cool.jpg" alt=""/>
                            </a>
                            <a href="#" className="answer sushi text"  onClick={() => this.question5Answered("sushi")}>
                                <p>Totes</p>
                            </a>
                        </div>
                        <div className="rightSide">
                            <a href="#" className="answer taco imgHolder"  onClick={() => this.question5Answered("taco")}>
                                <img src="public/assets/sad.jpg" alt=""/>
                            </a>
                            <a href="#" className="answer taco text"  onClick={() => this.question5Answered("taco")}>
                                <p>Noop</p>
                            </a>
                        </div>
                </section>
                <section className={`q q6 ${this.state.q6}`}>
                    <h3>Introvert or Extrovert?</h3>
                        <div className="leftSide">
                            <a href="#" className="answer sushi imgHolder" onClick={() => this.question6Answered("sushi")}>
                                <img src="public/assets/dont.jpg" alt=""/>
                            </a>
                            <a href="#" className="answer sushi text" onClick={() => this.question6Answered("sushi")}>
                                <p>Introvert</p>
                            </a>
                        </div>
                        <div className="rightSide">
                            <a href="#" className="answer taco imgHolder" onClick={() => this.question6Answered("taco")}>
                                <img src="public/assets/hay.jpg" alt=""/>
                            </a>
                            <a href="#" className="answer taco text" onClick={() => this.question6Answered("taco")}>
                                <p>Extrovert</p>
                            </a>
                        </div>
                </section>
                <section className={`q q7 ${this.state.q7}`}>
                    <h3>Pushasaur or Pushmander</h3>
                        <div className="leftSide">
                        <a href="#" className="answer sushi imgHolder" onClick={() => {this.question7Answered("sushi"); this.props.determineResult(); this.showSubmitButton()}}>
                                <img src="public/assets/bulba.jpg" alt=""/>
                            </a>
                        <a href="#" className="answer sushi text" onClick={() => { this.question7Answered("sushi"); this.props.determineResult(); this.showSubmitButton()}}>
                                <p>Pushasaur</p>
                            </a>
                        </div>
                        <div className="rightSide">
                        <a href="#" className="answer taco imgHolder" onClick={() => { this.question7Answered("taco"); this.props.determineResult(); this.showSubmitButton()}}>
                                <img src="public/assets/char.jpg" alt=""/>
                            </a>
                        <a href="#" className="answer taco text" onClick={() => { this.question7Answered("taco"); this.props.determineResult(); this.showSubmitButton()}}>
                                <p>Pushmander</p>
                            </a>
                        </div>
                        <a href="#" className="submit" onClick={() => { this.finishQuiz(); this.hideProgressBar() }} >Submit!</a>
                </section>
                <ProgressBar />
            </section>
        )
    }
}

export default Quiz;
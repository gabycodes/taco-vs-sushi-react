import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Quiz from './quiz';
import SplashPage from './splashPage';

class Result extends React.Component {
    constructor(props) {
        super(props);
        this.populatePage = this.populatePage.bind(this);
    }
    populatePage(result) {
        this.result = result;
        this.resultHeader = `You're on team ${result}!`;
        if (result === "taco") {
            this.resultImageUrl = "public/assets/tacoCheeky.png";
            this.resultBlurb = "Hola amigo! Welcome to team taco. May the good guac shine down upon you today."
        } else if (result === "sushi") {
            this.resultImageUrl = "public/assets/sushiCheeky.png";
            this.resultBlurb = "Konichiwa! Welcome to team sushi, honorable nori-san."
        }
    }
    render() {
        return (
            <section className="result">
                <h3>{`${this.resultHeader}`}</h3>
                <div className="imgHolder">
                <img src={`${this.resultImageUrl}`} alt=""/>
                </div>
                <p>{`${this.resultBlurb}`}</p>
                <a href="" className="playAgain">Play again!</a>
                <a href={`https://twitter.com/intent/tweet?hashtags=tacoVsSushi&text=Team ${this.result} ftw! http://bit.ly/2jBDX6b #tacoVsSushi`} target="_blank" className="decoyTweetIt twitter-share-button">Tweet it!</a>
            </section>
        )
    }
}

export default Result;
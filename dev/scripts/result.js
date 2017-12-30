import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Quiz from './quiz';
import SplashPage from './splashPage';

class Result extends React.Component {
    constructor(props) {
        super(props);
        this.populatePage = this.populatePage.bind(this);
        this.result = "burrito";
    }
    populatePage(result) {
        this.resultHeader = `You're on team ${result}!`;
        this.resultImageUrl = `public/assets/${result}cheeky.png`;
        const tacoBlurb = "Hola amigo! Welcome to team taco. May the guac shine down upon you today."
        const sushiBlurb = "Konichiwa! Welcome to team sushi, honorable nori-san."
        this.resultBlurb = `${result}Blurb`
    }
    render() {
        return (
                <section className="result">
                    <h3>{`${this.resultHeader}`}</h3>
                    <div className="imgHolder">
                        <img src="" alt=""/>
                    </div>
                    <p></p>
                    {/* <Switch>
                        <Route exact path="/" component={SplashPage} />
                    </Switch> */}
                    <a href="" className="playAgain">Play again!</a>
                    <a href="https://twitter.com/intent/tweet?hashtags=tacoVsSushi&text=hello!" target="_blank" className="decoyTweetIt twitter-share-button">Tweet it!</a>
                </section>
        )
    }
}

export default Result;
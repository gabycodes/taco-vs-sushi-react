import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Quiz from './quiz';
import SplashPage from './splashPage';

class Result extends React.Component {
    render() {
        return (
                <section class="result">
                    <h3></h3>
                    <div class="imgHolder">
                        <img src="" alt=""/>
                    </div>
                    <p></p>
                    <Switch>
                        <Route exact path="/" component={SplashPage} />
                    </Switch>
                    <a href="#" class="playAgain">Play again!</a>
                    <a href="https://twitter.com/intent/tweet?hashtags=tacoVsSushi&text=hello!" target="_blank" class="decoyTweetIt twitter-share-button">Tweet it!</a>
                </section>
        )
    }
}

export default Result;
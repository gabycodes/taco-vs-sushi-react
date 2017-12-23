import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Quiz from './quiz';

class SplashPage extends React.Component {
    render() {
        return (
            <section className="splash">
                <img src="public/assets/TL.png" class="accent" alt=""/>
                <img src="public/assets/TR.png" class="accent" alt=""/>
                <header>
                    <h1>¡Taco VS Sushi!</h1>
                    <p>featuring Pusheen</p>   
                </header>
                <div class="splashImages">
                    <div class="imgHolder">
                        <img src="public/assets/sushiAngry.png" alt=""/>
                    </div>
                    <div class="imgHolder">
                        <img src="public/assets/tacoAngry.png" alt=""/>
                    </div>
                </div>
                <h2>In the ultimate showdown, who will you stand beside??</h2>
                <a href="#" class="startQuiz">Begin!</a>
                <a href="http://www.pusheen.com/" class="credits">Images from www.pusheen.com!</a>
            </section>
        )
    }
}

export default SplashPage;
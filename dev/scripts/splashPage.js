import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Quiz from './quiz';

class SplashPage extends React.Component {
    constructor(props) {
        super();
        this.flyAway = this.flyAway.bind(this);
    }
    flyAway(e) {
        const splashPage = document.getElementsByClassName("splash")[0];
        splashPage.style.top = "-100vh";
    }
    render() {
        return (
            <section className="splash">
                <img src="public/assets/TL.png" className="accent" alt=""/>
                <img src="public/assets/TR.png" className="accent" alt=""/>
                <div className="mainContainer">
                    <header>
                        <h1>¡Taco VS Sushi!</h1>
                        <p>featuring Pusheen</p>   
                    </header>
                    <div className="splashImages">
                        <div className="imgHolder">
                            <img src="public/assets/sushiAngry.png" alt=""/>
                        </div>
                        <div className="imgHolder">
                            <img src="public/assets/tacoAngry.png" alt=""/>
                        </div>
                    </div>
                    <h2>In the ultimate showdown, who will you stand beside??</h2>
                    <a href="#" className="startQuiz" onClick={(event) => { this.flyAway();}}>Begin</a>
                    <a href="http://www.pusheen.com/" className="credits">Images from www.pusheen.com!</a>
                </div>
            </section>
        )
    }
}

export default SplashPage;
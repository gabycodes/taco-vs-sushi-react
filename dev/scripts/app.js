import React from 'react';
import ReactDOM from 'react-dom';
import SplashPage from './splashPage.js';
import Quiz from './quiz.js';
import Result from './result.js';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage : "splashPage",
      progressBarVisible: false,
      tacoScore: 0,
      sushiScore: 0,
      result: ""
    }
    this.tacoScore = 0;
    this.sushiScore = 0;
    this.result = "";
    this.updateCurrentPage = this.updateCurrentPage.bind(this);
    this.toggleProgress = this.toggleProgress.bind(this);
    this.scoreKeeper = this.scoreKeeper.bind(this);
    this.determineResult = this.determineResult.bind(this);
  }
  updateCurrentPage(page) {
    this.setState({
      currentPage : page
    })
  }
  toggleProgress() {
    if (this.state.progressBarVisible === false) {
      this.setState({
        progressBarVisible: true
      })
      console.log("progress bar visible");
    } else {
      this.setState({
        progressBarVisible: false
      })
      console.log("progress bar hidden");
    }
  }
  scoreKeeper(team) {
    let tacoScoreCurrent = this.state.tacoScore;
    let sushiScoreCurrent = this.state.sushiScore;
    if (team === "taco") {
      const tacoScoreNew = tacoScoreCurrent + 1;
      this.tacoScore === tacoScoreNew;
      console.log(`tacoScoreNew: ${tacoScoreNew}`);
      this.setState({
        tacoScore: tacoScoreNew
      })
      tacoScoreCurrent === tacoScoreNew;
      console.log(`tacoScore: ${tacoScoreCurrent}`);
    } else if (team === "sushi") {
      const sushiScoreNew = sushiScoreCurrent + 1;
      this.sushiScore === sushiScoreNew;
      console.log(`sushiScoreNew: ${sushiScoreNew}`);
      this.setState({
        sushiScore: sushiScoreNew
      })
    }
  }
  determineResult() {
    console.log("getting result...");
    let result = "";
    console.log(`this.taco: ${this.state.tacoScore}, this.sushi: ${this.state.sushiScore}`);
    if (this.state.tacoScore > this.state.sushiScore) {
      result = "taco"
      console.log(`You're on team ${result}`)
    }
    if (this.state.tacoScore < this.state.sushiScore) {
      result = "sushi"
      console.log(`You're on team ${result}`)
    }
    else if (this.state.tacoScore === this.state.sushiScore) {
      const randomNumber = Math.floor((Math.random() * 2) + 1);
      if (randomNumber === 1) {
        result = "taco"
        console.log(`You're on team ${result}`)
      } else if (randomNumber === 2) {
        result = "taco"
        console.log(`You're on team ${result}`)
      }
    }
    this.setState({
      result: result
    })
    this.child.populatePage(result);
  }
    render() {
      return (
          <div>
            <SplashPage />
            <Quiz toggleProgressBar={this.toggleProgress} scoreKeeper={this.scoreKeeper} determineResult={this.determineResult}/>
            <Result ref={instance => { this.child = instance; }}/>
          </div>
      )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));

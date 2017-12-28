import React from 'react';
import ReactDOM from 'react-dom';
import SplashPage from './splashPage.js';
import Quiz from './quiz.js';
import Result from './result.js';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentPage : "splashPage"
    }
    this.updateCurrentPage = this.updateCurrentPage.bind(this);
  }
  updateCurrentPage(page) {
    this.setState({
      currentPage : page
    })
  }
    render() {
      return (
        <Router>
          <div>
            <Switch>
              <Route exact path="/" component={SplashPage} currentPage={this.updateCurrentPage}/>
              <Route path="/quiz" component={Quiz} currentPage={this.updateCurrentPage}/>
              <Route path="/result" component={Result} currentPage={this.updateCurrentPage}/>
            </Switch>
          </div>
        </Router>
      )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));

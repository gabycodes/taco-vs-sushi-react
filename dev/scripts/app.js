import React from 'react';
import ReactDOM from 'react-dom';
import SplashPage from './splashPage.js';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

class App extends React.Component {
    render() {
      return (
        <Router>
          <div>
            <Switch>
              <Route exact path="/" component={SplashPage} />
            </Switch>
          </div>
        </Router>
      )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));

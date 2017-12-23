import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Quiz from './quiz';

class ProgressBar extends React.Component {
    render() {
        return (
            <aside className="progressBarHolder">
                <p>Progress</p>
                <div className="progressBar">
                    <div className="progress"></div>
                </div>
            </aside>
        )
    }
}

export default ProgressBar;
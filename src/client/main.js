import React, { Component } from "react"
import { render } from "react-dom"
import { HashRouter as Router, Route } from "react-router-dom"

import TitleBar from "./components/TitleBar"
import Home from "./components/Home"
import RepetitiveFunctionCalculator from "./components/RepetitiveFunctionCalculator"

import "./main.scss"

class Main extends Component {
	render() {
		return (
			<Router>
				<div className="app-container">
					<TitleBar />
					<Route exact path="/" component={Home} />
					<Route exact path="/repFunc" component={RepetitiveFunctionCalculator} />
				</div>
			</Router>
		)
	}
}

render(<Main />, document.getElementById("app-mount"))
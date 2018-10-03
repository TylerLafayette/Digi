import React, { Component } from "react"

import "./RepetitiveFunctionCalculator.scss"
import Header from "./Header"
import MathInput from "./MathInput"

export default class RepetitiveFunctionCalculator extends Component {
	constructor() {
		super()
		this.state = {

		}
	}
	render() {
		return (
			<div className="page-wrapper calculator-wrapper">
				<Header>Repetitive function</Header>
				<MathInput />
			</div>
		)
	}
}
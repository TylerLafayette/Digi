import React, { Component } from "react"

import "./MathInput.scss"

export default class MathInput extends Component {
	constructor() {
		super()
	}
	componentDidMount() {
		MathQuill = MathQuill.getInterface(1)
		this.mathField = MathQuill.MathField(this.input, {})
		this.mathField.focus()
	}
	render() {
		return (
			<div className="math-input">
				<div ref={el => this.input = el}></div>
			</div>
		)
	}
}
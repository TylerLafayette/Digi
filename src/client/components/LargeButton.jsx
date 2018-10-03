import React, { Component } from "react"

import "./LargeButton.scss"

export default class LargeButton extends Component {
	render() {
		return (
			<button {...this.props} className="large-button-reg">
				{this.props.children}
			</button>
		)
	}
}
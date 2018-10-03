import React, { Component } from "react"

import "./SubHeader.scss"

export default class SubHeader extends Component {
	render() {
		return (
			<span className="large-subheader">{this.props.children}</span>
		)
	}
}
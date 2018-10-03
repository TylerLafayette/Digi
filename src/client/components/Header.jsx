import React, { Component } from "react"

import "./Header.scss"

export default class Header extends Component {
	render() {
		return (
			<span className="large-header">{this.props.children}</span>
		)
	}
}
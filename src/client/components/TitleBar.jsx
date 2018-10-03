import React, { Component } from "react"

import "./TitleBar.scss"

export default class TitleBar extends Component {
	render() {
		return (
			<div className="title-bar-wrapper">
				<div className="center-span">
					<span className="span">DIGI</span>
				</div>
			</div>
		)
	}
}
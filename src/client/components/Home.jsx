import React, { Component } from "react"
import { withRouter } from "react-router"

import Header from "./Header"
import SubHeader from "./SubHeader"
import LargeButton from "./LargeButton"

import "./Home.scss"

class Home extends Component {
	repFunc() {
		this.props.history.push('/repFunc')
	}
	render() {
		return (
			<div className="page-wrapper extra-padding">
				<div className="header-block">
					<Header>Hi there!</Header>
					<SubHeader>What would you like to do?</SubHeader>
				</div>
				<LargeButton onClick={this.repFunc.bind(this)}>[+] rep func</LargeButton>
			</div>
		)
	}
}

export default withRouter(Home)
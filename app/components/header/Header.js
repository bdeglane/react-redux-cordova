import React from 'react';
import { Link } from 'react-router'
import { Icon } from 'react-fa';

import './header.scss';

export default class Header extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (<header className="grid-block">
			<div className="grid-block">
				<div className="grid-content shrink app-title">
					<Link to="/">
						<h1>{this.props.title}</h1>
					</Link>
				</div>
				<div className="grid-block">
					<ul className="grid-block menu--main">
						<li className="grid-block">
							<Link to="/list" className="grid-block align-center" activeClassName="active">
								<span>
									<Icon name="users"/> All
								</span>
							</Link>
						</li>
						<li className="grid-block">
							<Link to="/add" className="grid-block align-center" activeClassName="active">
								<span>
									<Icon name="user-plus"/> Add
								</span>
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</header>);
	}
}

import React, { Component } from 'react';
import { Route, withRouter, Switch,Redirect } from 'react-router-dom';

import TopNav from 'Containers/TopNav'
import Sidebar from 'Containers/Sidebar';

import gogo from './gogo';
import secondMenu from './second-menu';
import sellCrop from './sellCrop';
import transport from './transport';
import warehouse from './warehouse';
import mywarehouse from './mywarehouse';
import allwarehouse from './allwarehouse';
import alltransport from './alltransport';
import alltransaction from './alltransaction';
import weather from './weather';

import { connect } from 'react-redux';

class MainApp extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { match, containerClassnames} = this.props;
		return (
			<div id="app-container" className={containerClassnames}>
				<TopNav history={this.props.history} />
				<Sidebar/>
				<main>
					<div className="container-fluid">
						<Switch>
							<Route path={`${match.url}/gogo`} component={gogo} />
							<Route path={`${match.url}/second-menu`} component={secondMenu} />
							<Route path={`${match.url}/sellCrop`} component={sellCrop} />
							<Route path={`${match.url}/transport`} component={transport} />
							<Route path={`${match.url}/warehouse`} component={warehouse} />
							<Route path={`${match.url}/mywarehouse`} component={mywarehouse} />

							<Route path={`${match.url}/allwarehouse`} component={allwarehouse} />
							<Route path={`${match.url}/alltransport`} component={alltransport} />
							<Route path={`${match.url}/alltransaction`} component={alltransaction} />
							<Route path={`${match.url}/weather`} component={weather} />

							<Redirect to="/error" />
						</Switch>
					</div>
				</main>
			</div>
		);
	}
}
const mapStateToProps = ({ menu }) => {
	const { containerClassnames} = menu;
	return { containerClassnames };
  }

  export default withRouter(connect(mapStateToProps, {})(MainApp));

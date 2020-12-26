import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
	LandingAction,
	handleTabSelection,
	handleUpdateFavList,
	handleRemoveFav,
} from '../actions/LandingActions';
import './LandingPage.css';
import {Button} from 'react-bootstrap';

class LandingPage extends Component {
	componentDidMount() {
		this.props.LandingAction();
	}

	render() {
		const {isLoading, data, tabList, favList, selectedTab} = this.props;
		if(isLoading) {
			return (
				<div>
					<h1>Loading....</h1>
				</div>
			);
		} else {
			return (
				<div>
					<div className='tabs'>
						{tabList.map((tab) => (
							<h3
								className={tab.isSelected ? 'tabs-sel' : 'tabs-unsel'}
								onClick={() => this.props.handleTabSelection(tab.name, tabList)}
							>
								{tab.name}
							</h3>
						))}
					</div>
					{selectedTab === 'All' ? (
						<div className='container'>
							{data.map((planet) => (
								<div className={planet.isFavourite ? 'card sel' : 'card'}>
									<h4>{planet.name}</h4>
									{!planet.isFavourite ? (
										<Button
											variant='success'
											onClick={() =>
												this.props.handleUpdateFavList(planet, favList, data)
											}
										>
											Add to fav
										</Button>
									) : null}
								</div>
							))}
						</div>
					) : (
							<div className='container'>
								{favList && favList.length === 0 ? <h1>Empty fav list</h1> : null}
								{favList && favList.length !== 0 && favList.map((planet) => (
									<div className='card'>
										<h5>{planet.name}</h5>
										<Button
											variant='danger'
											onClick={() =>
												this.props.handleRemoveFav(planet.id, favList, data)
											}
										>
											Remove from fav
                  </Button>
									</div>
								))}
							</div>
						)}
				</div>
			);
		}
	}
}

const mapStateToProps = ({LandingReducers}) => {
	const {isLoading, data, tabList, favList, selectedTab} = LandingReducers;
	return {
		isLoading,
		data,
		tabList,
		favList,
		selectedTab,
	};
};

export default connect(mapStateToProps, {
	LandingAction,
	handleTabSelection,
	handleUpdateFavList,
	handleRemoveFav,
})(LandingPage);

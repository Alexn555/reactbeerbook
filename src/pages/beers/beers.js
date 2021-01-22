import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Container, Segment, Button } from 'semantic-ui-react';
import { filterItems } from '../../utils/object';

import { getBeers } from '../../actions/beer-actions';
import BeerError from '../../components/beer-error/beerError';
import BeerList from '../../components/beers/beerList';

class BeerListPage extends Component {

  constructor(props) {
    super(props);
    this.getBeers = this.getBeers.bind(this);
    this.getOnlyBrewedBeforeYear = this.getOnlyBrewedBeforeYear.bind(this);
	this.state = { beerList: [], savedList: [], brewedSwitched: false }
  }

  componentDidMount(){
	this.getBeers();
  }

  componentDidUpdate(prevProps) {
  	const { beerList } = this.props;
    if (beerList !== prevProps.beerList) {
	  this.setState({ beerList: beerList, savedList: beerList });
    }
  }

  getOnlyBrewedBeforeYear() {
  	const { brewedSwitched, beerList, savedList } = this.state;
    const limitYear = 2010;

    if (!brewedSwitched) {
        const updateList = [];
        for (let item of beerList) {
            let brewedYear = item.first_brewed.split('/')[1];
            brewedYear = parseInt(brewedYear, 10);
            if (brewedYear <= limitYear) {
                updateList.push(item);
            }
        }
        if (updateList && updateList.length > 0) {
            this.setState({ beerList: updateList, brewedSwitched: true });
        }
	} else {
    	this.setState({ beerList: savedList, brewedSwitched: false });
	}
  }

  getBeers() {
	this.props.getBeers();
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const { savedList } = this.state;
	// check if name in array and show findings
	if (value.length > 3) {
		let filteredList = filterItems('name', value, this.state.beerList);
		this.setState({
			beerList: filteredList
		});
	} else { //restore previously saved
		this.setState({
			beerList: savedList
		});
	}
  }

  showFilterInput() {
	return (
		<input type="text"
		  className="filterField"
		  placeholder="Search Name"
		  name="filterName" onChange={this.handleInputChange.bind(this)}
		/>
	);
  }

  render() {
	const { loading, errors } = this.props;
	const { beerList } = this.state;
	if (beerList.length > 0) {
        return (
            <Container>
			<Segment>
				Beer search {this.showFilterInput()}
			 </Segment>
			<Segment>
				<Button onClick={this.getOnlyBrewedBeforeYear}>
					Toggle brewed
				</Button>
			</Segment>
			<BeerList beers={beerList} />
		  </Container>
        );
      } 
      else {
        return(
		  <BeerError beers={beerList}
		    loading={loading}
		    errors={errors}
           />
		 );
      }
   }

 }

const mapStateToProps = (state) => {
  return {
    beerList: state.beerStore.beerList,
	loading: state.beerStore.loading,
    errors: state.beerStore.errors
  }
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getBeers: getBeers,
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(BeerListPage);

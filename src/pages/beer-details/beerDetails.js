import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Container, Message } from 'semantic-ui-react';

import { getBeerDetails } from '../../actions/beer-actions';
import BeerDetails from '../../components/beer-details/beerDetails';

class BeerDetailsPage extends Component {

  constructor(props) {
    super(props);
    this.getBeerDetails = this.getBeerDetails.bind(this);
	this.state = { beer: {} }
  }

  componentDidMount(){
	this.getBeerDetails();
  }

  getBeerDetails() {
	this.props.getBeerDetails();
  }

  render() {
    const { beer } = this.props;
    if (beer && beer.length > 0) {
        return (
           <Container>
             <BeerDetails beer={beer[0]} />
           </Container>
        );
      } else {
        return (
           <Message icon negative>
             No beer details found!
           </Message>
        );
      }
   }

 }

const mapStateToProps = (state) => {
  return {
    beer: state.beerStore.beer,
	loading: state.beerStore.loading,
    errors: state.beerStore.errors
  }
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getBeerDetails: getBeerDetails,
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(BeerDetailsPage);

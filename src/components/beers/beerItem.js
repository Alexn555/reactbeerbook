import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Card, Image, Button } from 'semantic-ui-react';

export default class BeerItem extends Component {

  constructor(props) {
    super(props);
    this.state = { showDetails: false, isTagline: false };
    this.redirectToDetails = this.redirectToDetails.bind(this);
    this.onHoverCard = this.onHoverCard.bind(this);
  }
  
  redirectToDetails() {
	  this.setState({ showDetails: true });
  }

  onHoverCard() {
  	// toggle tagline
	const { isTagline } = this.state;
	this.setState({ isTagline: !isTagline });
  }

  showBeer() {
	  const { id, image_url, name, description, tagline } = this.props.beer;
	  const { showDetails, isTagline } = this.state;
	  
	  if (showDetails) {
	  	const link =`beers/${id}`;
          return (
		   <Redirect to={link} />
	    );
	  }

	  const TagLineDiv = isTagline ? (
		  <Card.Content extra>
			  <span>
				{tagline}
			  </span>
		  </Card.Content>
	  ) : null;

	  return (
	      <Card onMouseEnter={this.onHoverCard} onMouseLeave={this.onHoverCard}>
			<Image src={image_url} wrapped ui={false} />
			<Card.Content>
			  <Card.Header>{name}</Card.Header>
			  <Card.Description>
			   {description}
			  </Card.Description>
			</Card.Content>

			{TagLineDiv}

			<Button onClick={(e) => { this.redirectToDetails(id); }}>
			  Show Details 
			</Button>
		  </Card>
	  );
  }

  render() {
      return (
        this.showBeer()
      );
  }

 }
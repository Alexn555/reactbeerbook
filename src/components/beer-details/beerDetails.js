import React, { Component } from 'react';
import { Card } from 'semantic-ui-react';
import styles from './beerDetails.module.scss';

export default class BeerDetails extends Component {
 
  showDetails() {
      const { beer } = this.props;
	  const { ph, food_pairing, brewers_tips, method } = beer;
      const { fermentation, mash_temp } = method;
      const mesh = mash_temp[0];

      const FoodPairingArray = food_pairing.map( (item, index) =>
          <li className={styles.item} key={index} >
              {item}
          </li>
      );

	  return (
          <Card>
              <Card.Content>
                <Card.Header>PH: {ph}</Card.Header>
              <Card.Description>
                <ul>
                   {FoodPairingArray}
                </ul>
              </Card.Description>
                {brewers_tips}
              </Card.Content>
              <Card.Content extra>
                  Fermentation: {fermentation.temp.value} C degree
              </Card.Content>
              <Card.Content extra>
                  Mesh: {mesh.temp.value} C degree
                  Duration: {mesh.duration}
              </Card.Content>
          </Card>
	  );
  }

  render() {
      return (
        this.showDetails()
      );
  }

 }
import React from 'react';
import { Grid, Message } from 'semantic-ui-react';
import styles from './beers.module.scss';

import BeerItem from './beerItem';

function BeerList(props) {
    const { beers } = props;

    if (beers === null) {
        return <Message>No beers</Message>;
    }
    const itemList = beers.map( (item, index) =>
		<Grid.Column className={styles.item} key={index} >
			<BeerItem 
			   key={index}
			   beer={item}
			   index={index}
			/>
		</Grid.Column>
    );
    return (
		<Grid columns={3} divided>
			<Grid.Row>
           	  {itemList}
			</Grid.Row>
		</Grid>
    );
}

export default BeerList;
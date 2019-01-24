import React, { Component } from 'react';
import Home from './Home';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';
import { Divider } from '@material-ui/core';
import { ALL_ITEMS_QUERY } from '../../apollo/queries';

// const GET_items = gql`
//   {
//     items {
//       id
//       title
//     }
//   }
// `;

const Items = ({ onItemSelected }) => (
  <Query variables={2} query={ALL_ITEMS_QUERY}>
    {({ loading, error, data }) => {
      if (loading) return 'Loading...';
      if (error) return `Error! ${error.message}`;

      return (
        <List>
          {console.log(data)}
          {data.items.map(item => (
            <ListItemText key={item.id} value={item.title}>
              {item.title}

              <Divider />
            </ListItemText>
          ))}
        </List>
      );
    }}
  </Query>
);

class HomeContainer extends Component {
  render() {
    return (
      <div>
        <Items />
        <Home classes={this.props.classes} />
      </div>
    );
  }
}
export default withStyles(styles)(HomeContainer);

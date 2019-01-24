import React from 'react';
import { Query } from 'react-apollo';
import { ALL_ITEMS_QUERY } from '../../apollo/queries';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import MenuBar from '../../components/MenuBar';
import { withRouter } from 'react-router-dom';
const Items = ({ classes, history }) => {
  return (
    <div>
      <MenuBar />
      <p>
        <Query query={ALL_ITEMS_QUERY}>
          {({ loading, error, data }) => {
            if (loading) return 'Loading...';
            if (error) return `Error! ${error.message}`;

            return (
              <>
                {data.items.map(item => (
                  <Card
                    onClick={() => {
                      history.push(`/profile/${item.itemowner.id}`);
                    }}
                  >
                    <CardContent>
                      {' '}
                      title:{item.title}
                      tags:{item.tags.map(tag => {
                        return <li>{tag.title}</li>;
                      })}
                      id:{item.id}
                      description:{item.description}
                    </CardContent>
                  </Card>
                ))}
              </>
            );
          }}
        </Query>
      </p>
    </div>
  );
};

export default withRouter(Items);

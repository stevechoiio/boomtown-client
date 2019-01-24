import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import List from '@material-ui/core/List';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { ALL_USER_ITEMS_QUERY } from '../../apollo/queries';

import MenuBar from '../../components/MenuBar';

const Profile = ({ classes, id }) => {
  return (
    <div>
      <MenuBar />

      <h3>
        {' '}
        user email:{' '}
        <Query variables={{ id: id }} query={ALL_USER_ITEMS_QUERY}>
          {({ loading, error, data }) => {
            if (loading) return 'Loading...';
            if (error) return `Error! ${error.message}`;
            const USER = data.user;
            return (
              <>
                <p>
                  This is the profile page for id:{id}{' '}
                  <code>/profile/:userId</code>. for
                </p>
                <Card>
                  <CardContent>
                    <Typography color="textSecondary" gutterBottom />
                    {USER.items.map(a => {
                      return (
                        <>
                          <p>{a.title}</p>
                          <p>{a.description}</p>
                        </>
                      );
                    })}
                  </CardContent>
                </Card>
              </>
            );
          }}
        </Query>
        {id}
      </h3>
    </div>
  );
};

export default Profile;

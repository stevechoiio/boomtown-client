import React from 'react';
import ReactDOM from 'react-dom';
import { MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter } from 'react-router-dom';
// import { BrowserRouter } from 'react-router-dom'
// import { Provider as ReduxProvider } from 'react-redux'
// -------------------------------

import registerServiceWorker from './registerServiceWorker';
import theme from './theme';

import client from './apollo';

/**
 * @TODO: Add Routing
 *
 * Uncomment the following line when your routes are configured
 *
 * import Routes from './routes/index'
 *
 * Below in your <App />, nest your <Routes /> inside of <BrowserRouter />
 * component to enable routing in your client app.
 */

/**
 * @TODO: Initialize Redux Store
 *
 * Uncomment the following line when your Redux store is configured
 *
 * import store from './redux'
 *
 * Below in your <App />, wrap a <ReduxProvider /> component around all
 * of the app's children, and pass it the imported `store` as the `store`
 * prop's value.
 */

/**
 * @TODO: Add the Viewer Context
 *
 * import { ViewerProvider } from './context/ViewerProvider'
 *
 * Below in your <App />, wrap the <ViewerProvider /> component around
 * the <BrowserRouter /> component so the router is aware of whether a
 * user is currently logged in and who that user is.
 */

// @TODO: Remove this import once you have your router working below
import Home from './pages/Home';
// -------------------------------
import Layout from './routes/Layout';
import './index.css';

const App = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <ApolloProvider client={client}>
        <BrowserRouter>
          <Layout />
        </BrowserRouter>
      </ApolloProvider>
    </MuiThemeProvider>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
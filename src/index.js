import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Amplify , { Auth }  from 'aws-amplify';
import AWSConfig from './AWSConfig';

/* run the folowing commands at the command prompt
amplify add auth
amplify push
npm add aws-amplify 
*/

Amplify.configure({
  Auth: {
    mandatorySignIn: true,
    region: AWSConfig.cognito.REGION,
    userPoolId: AWSConfig.cognito.USER_POOL_ID,
    identityPoolId: AWSConfig.cognito.IDENTITY_POOL_ID,
    userPoolWebClientId: AWSConfig.cognito.APP_CLIENT_ID
  }
  // Storage: {
  //   region: AWSConfig.s3.REGION,
  //   bucket: AWSConfig.s3.BUCKET,
  //   identityPoolId: AWSConfig.cognito.IDENTITY_POOL_ID
  // },
  // API: {
  //   endpoints: [
  //     {
  //       name: "notes",
  //       endpoint: AWSConfig.apiGateway.URL,
  //       region: AWSConfig.apiGateway.REGION
  //     },
  //   ]
  // }
});

ReactDOM.render(
 <Router>
    <App />
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

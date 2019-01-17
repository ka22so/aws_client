import React, { Component } from 'react';
import Amplify from 'aws-amplify';
import { Authenticator } from 'aws-amplify-react';
import Config from '../aws-exports';

import { Auth } from 'aws-amplify';

Amplify.configure({
  Auth: {
    region: Config.aws_cognito_region,
    userPoolId: Config.aws_user_pools_id,
    userPoolWebClientId: Config.aws_user_pools_web_client_id
  }
});
 
class Login extends Component {
  render() {

    Auth.currentSession()
    .then(data => console.log(data, this))
    .catch(err => console.log(err, this));

    Auth.currentUserPoolUser()
    .then(data => {
      Auth.userAttributes(data)
      .then(data => console.log(data, this))
      .catch(err => console.log(err, this));
    })
    .catch(err => console.log(err, this));

    return <Authenticator />
  }
}
 
export default Login;
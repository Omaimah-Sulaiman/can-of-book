import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import { useAuth0 } from "@auth0/auth0-react";
import './Login.css';
import Button from 'react-bootstrap/Button';
import LoginButton from './Component/LoginButton';



const Login = () => {
  const { isAuthenticated, loginWithRedirect } = useAuth0();

  return !isAuthenticated && (

    <Card style={{ width: '18rem' }}>
    <Card.Body>
      <Card.Title>Log In</Card.Title>
      <Card.Text>
        Click Below to Log In
      </Card.Text>

      {/* TODO: add a `LoginButton` component here that will log the user in with Auth0 */} 
      <LoginButton />
      {/* <Button onClick={() => loginWithRedirect()}>Log In</Button> */}

    </Card.Body>
  </Card>

      
  );
};

     
    

export default Login;
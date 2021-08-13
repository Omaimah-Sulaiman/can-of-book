import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
// import './header.css';
import Logout from './Logout';
import{withAuth0} from '@auth0/auth0-react';
import LoginButton from './Component/LoginButton';
import LogoutButton from './Logout';

class Header extends React.Component {
  render() {
    const {isAuthenticated} =this.props.auth0
    return(
  
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand>My Favorite Books</Navbar.Brand>
          <Link to="/">Home</Link>
          <Link to="/profile">Profile</Link>
          {/* TODO: if the user is logged in, render the `LogoutButton` - if the user is logged out, render the `LoginButton` */}
          {/* <Logout id='logoutButton' / > */}
            {isAuthenticated?<LogoutButton/>:<LoginButton/>}
      </Navbar> 

    )
  }
}

export default withAuth0(Header);
import React from 'react';
import Header from './Header';
import IsLoadingAndError from './IsLoadingAndError';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Footer';
import { BrowserRouter as Router,Switch,Route} from "react-router-dom";
import {withAuth0} from "@auth0/auth0-react" 
import myFavoriteBook from './myFavoriteBooks'
import Profile from './Profile'
import Login from './Login';


class App extends React.Component {

  render() {
    console.log('app', this.props)
    const {isAuthenticated} =this.props.auth0
    return(
      <>
        <Router>
        <IsLoadingAndError>
            <Header />
              <Switch>
                <Route exact path="/">
                  {
                   !isAuthenticated ? <Login /> : <myFavoriteBook />
                  }
                </Route>
                
                <Route exact path="/profile">
                  { isAuthenticated ?  <Profile /> : <Login />}
                
                </Route>
              </Switch>
            <Footer />
          </IsLoadingAndError>
        </Router>
      </>
    )
  }
}

export default withAuth0(App);
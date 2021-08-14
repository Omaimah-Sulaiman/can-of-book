import React, { Component } from "react";
import { User, withAuth0 } from "@auth0/auth0-react";
export class Profile extends Component {

render(){
  return(

    <div>
      <h1> heelo</h1>
      <p>
        {User.name}
      </p>
      <img src={User.picture} alt=""/>
      <p>{User.emil}</p>
    </div>
    
  )
}
}
export default withAuth0(Profile);
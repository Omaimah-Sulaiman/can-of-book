import React, { Component } from "react";
import { User, withAuth0 } from "@auth0/auth0-react";
import BeastBooks from "./Component/BeastBooks";
import axios from "axios";
import BookFormModel from "./Component/BookFormModel";
import Button from "react-bootstrap/Button";
import UpdateBookForm from "./Component/UpdateBookForm";
export class Profile extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       username: this.props.auth0.user.name,
//       userPicture: this.props.auth0.user.picture,
//       userEmail: this.props.auth0.user.email,
//       serverUrl: process.env.REACT_APP_SERVER_URL,
//       booksData: [],
//       bookName: "",
//       description: "",
//       status: "",
//       flagAddBook: false,
//       showUpdateForm: false,
//       bookIndex: 0,
//     };
//   }

//   bookIndex = (indexBook) => {
//     console.log('bookIndex==',indexBook);
//     this.setState({
//       bookIndex: indexBook,
//       showUpdateForm: !this.state.showUpdateForm,
//     });
//   };

//   flagAddBook = () => {
//     this.setState({
//       flagAddBook: !this.state.flagAddBook,
//     });
//   };


//   updateBookForm = (e) => {
   
//    e.preventDefault();
//    try{
//     console.log('Fornt Update==',this.state.bookIndex);
//     const reqBody = {
//       userEmail: this.state.userEmail,
//       bookName: this.state.bookName,
//       discBook: this.state.description,
//       bookStatus: this.state.status,
//     };

//     axios
//       .put(`${this.state.serverUrl}/book/${this.state.bookIndex}`, reqBody)
//       .then((response) => {
//         this.setState({
//           booksData: response.data.books,
//           showUpdateForm: !this.state.showUpdateForm,
//         });
//       });
//     } catch(error){
//      console.log('UUUUUUUUUUUU',error.message); 
//     }
  
//     };

//   updateBookName = (bookName) => {
//     this.setState({
//       bookName: bookName,
//     });
//   };

//   updatedescription = (desc) => {
//     this.setState({
//       description: desc,
//     });
//   };
//   statusBook = (stateBook) => {
//     this.setState({
//       status: stateBook,
//     });
//   };

//   createBook = (e) => {
//     e.preventDefault();
//     const reqBody = {
//       userEmail: this.state.userEmail,
//       bookName: this.state.bookName,
//       discBook: this.state.description,
//       bookStatus: this.state.status,
//     };
//     axios.post(`${this.state.serverUrl}/book`, reqBody).then((response) => {
//       this.setState({
//         booksData: response.data.books,
//         flagAddBook: !this.state.flagAddBook,
//       });
//     });
//   };

//   componentDidMount = () => {
//     axios
//       .get(`${this.state.serverUrl}/books?email=${this.state.userEmail}`)
//       .then((response) => {
//         console.log("axios", response.data.books);
//         this.setState({
//           booksData: response.data.books,
//         });

//         console.log("response", response);
//       })
//       .catch((error) => {
//         alert(error.message);
//       });
//   };
//   deleteBook = (index) => {

//      console.log('Index======',index);
//     axios
//       .delete(
//         `${this.state.serverUrl}/book/${index}?userEmail=${this.state.userEmail}`
//       )
//       .then((response) => {
//         this.setState({
//           booksData: response.data.books,
//         });
//       });
//   };

//   render() {
//     return (
//       <div>
//         <h2> {this.state.username} </h2>
//         <p> {this.state.userEmail} </p>
//         <img src={this.state.userPicture} alt={this.state.username} />
//         <Button onClick={this.flagAddBook}>{this.state.flagAddBook ? 'Cancel' : 'Add New Book'   }</Button>
//         {this.state.flagAddBook && (
//           <BookFormModel
//             updatBookName={this.updateBookName}
//             updatdescription={this.updatedescription}
//             statusBook={this.statusBook}
//             createBook={this.createBook}
//           />
//         )}

//         {
//           <BeastBooks
          
//             booksData={this.state.booksData}
//             deleteBook={this.deleteBook}
//             bookIndex={this.bookIndex}
//           />
//         }
// { this.state.showUpdateForm &&
//         <UpdateBookForm 
//             updatBookName={this.updateBookName}
//             updatdescription={this.updatedescription}
//             statusBook={this.statusBook}
//             updateBookForm={this.updateBookForm}
        
//         />


// }
//       </div>
//     );
//   }
// }
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
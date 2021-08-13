import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import './myFavoriteBooks.css';
import axios  from 'axios';
import {withAuth0} from "@auth0/auth0-react" 
import Button from 'react-bootstrap/Button'
import { AddBook } from './Component/AddBook';


class MyFavoriteBooks extends React.Component {
  constructor(props){
    super(props);
    this.state={
      books:[],
      showAddModel:false,
      showUpdateModel:false,
      bookObj:[]
    }
  } 
  componentDidMount=()=>{
    axios.get(`${process.env.REACT_APP_SERVER}/books?email=${this.props.auth0.user.email}`).then(axiosRes=>{
      this.setState({books:axiosRes.data})
    }).catch(error=>alert(error))
  }
  
  addModel=()=>{
    this.setState({showAddModel:!this.state.showAddModel})
  }
  handelUpdateModel=(bookObj)=>{
    this.setState({
      showUpdateModel:!this.state.showUpdateModel,
      bookObj:bookObj
    })
  }
  submitAddBookForm=(e)=>{
    e.preventDefault();
    const body = {
      email:this.props.auth0.user.email,
      title:e.target.title.value,
      status:e.target.status.value,
      description:e.target.description.value
    }
    axios.post(`${process.env.REACT_APP_SERVER}/book`,body).then(axiosRes=>{
      this.state.books.push(axiosRes.data)
      this.setState({books:axiosRes.data})
      this.addModel()

    }).catch(error=>alert(error))
  }

  submitUpdateBookForm=(e)=>{
    e.preventDefault();
    const body = {
   
      title:e.target.title.value,
      status:e.target.status.value,
      description:e.target.description.value
    }
    axios.put(`${process.env.REACT_APP_SERVER}/book`,body).then(axiosRes=>{
      this.handelUpdateModel()

    }).catch(error=>alert(error))
  }
  deleteBook=(id)=>{
    axios.delete(`${process.env.REACT_APP_SERVER}/books/${id}`).then(axiosRes=>{
      if(axios.data.delletedCount){
        const tempBookArr = this.state.books.filter(book=>book._id !== id);
        this.setState({books:tempBookArr})
      }
    }).catch(error=>alert(error))
  }
  
  }
  render() {
    return(
      <Jumbotron>
        <h1>My Favorite Books</h1>
         <Button onClick={this.addModel}>
           add book
         </Button>
         {
           this.state.showAddModel&&
           <AddBook 
           show={this.state.showAddModel}
           handelClose={this.addModel}
           submitAddBookForm={this.submitAddBookForm}
           />
         }

{
           this.state.showUpdateModel&&
           <UpdateBook 
           show={this.state.showUpdateModel}
           handelClose={this.addModel}
           submitUpdateBook={this.submitUpdateBook}
           bookObj={this.state.bookObj }

           />
         }
         {
        this.state.books.length &&
        {
          this.state.books.map(book=>{
            return(
            <div>
              <h1> {book.title}</h1>
              <p>{book.description}</p>
              <Button onClick={(e)=> this.deleteBook(id) }>Remove</Button>
              <Button onClick={e => this.handelUpdateModel(book)} >Update</Button>
            </div>
          )})
        }
      </Jumbotron>
    )
  }
}

export default withAuth0(MyFavoriteBooks);
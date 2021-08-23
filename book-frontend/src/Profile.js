import React, { Component } from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import Content from './Components/Content';
import axios from 'axios';
import Carousel from 'react-bootstrap/Carousel';
import BookFormModal from './Components/BookFormModal';
import Button from 'react-bootstrap/Button';
import UpdatedBook from './Components/UpdatedBook';




class Profile extends Component {

  
// constructor(props) {
//   super(props)
//   this.state = {
//     ownerEmail: this.props.auth0.user.email,
//     books: [],

//   };
// }


// componentDidMount() {
//   this.fetchBooks();
// }
// fetchBooks = async () => {
//   await axios.get(
//   `${process.env.REACT_APP_SERVER}/books?email=${this.state.ownerEmail}`
// ).then(axiosResponse=>{this.setState({
//   books: axiosResponse.data
// });
// }).catch(error => alert(error));
// };


  render() {
    // console.log(this.state.books);
    console.log(this.props.auth0.user);
    const { user, isAuthenticated } = this.props.auth0;
    return (
      isAuthenticated &&
      <div>
        <img src={user.picture} alt={user.name} />
        <div> {user.name}</div>
        <p>
          {user.email}
        </p>
        <Content />
        {/* <Carousel>
            {console.log(this.state.books)}
            {this.state.books.length > 0 &&
              this.state.books.map((book,id) => (
                <Carousel.Item key={id}>
                  <img
                    className='d-block w-30'
                    style={{
                      height: '500px',
                      width: '700px',
                      marginLeft: '29%',
                    }}
                    src={
                      'https://t3.ftcdn.net/jpg/03/13/53/94/360_F_313539495_TIfAx53PwhMQopiuu7J1RiY2lVzSWrep.jpg'
                    }
                    alt='Book'
                  />
                  <Carousel.Caption>
                    <h3
                      style={{
                        fontSize: '25px',
                        backgroundColor: '#fff',
                        color: '#333',
                        width: '38%',
                        textAlign: 'center',
                        marginLeft: '30%',
                      }}
                    >
                      {book.title}
                    </h3>
                    <p
                      style={{
                        fontSize: '18px',
                        width: '34%',
                        textAlign: 'center',
                        marginLeft: '34%',
                      }}
                    >
                      {book.description}
                      {book.status}
                    </p>
                    <Button variant="outline-danger" onClick={() => this.deleteBook(book._id)}>Delete Book</Button>
                    <Button variant="outline-danger" onClick={() => this.handelUpdatedModal(book)}>Update Book</Button>
                  </Carousel.Caption>
                </Carousel.Item>
              ))}
          </Carousel> */}
   
      
      </div>
    );
  }
}

export default withAuth0(Profile);
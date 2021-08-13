import React, { Component } from 'react'
import Modal from 'react-bootstrap/Modal'
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'


export class AddBook extends Component{
    render(){
        return(
            <div>
                
      <Modal show={this.props.show} onHide={this.props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add  book</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form  onSubmit={(e)=> this.props.submitAddBookForm(e)}>
                
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Book :</Form.Label>
                  <Form.Control name='title' type="text" placeholder="Enter Book Name"  />
                  <Form.Label>Discription:</Form.Label>
                  <Form.Control name='description'  type="text" placeholder="Enter Discription"  />
                  <Form.Label>Status:</Form.Label>
                  <Form.Control name='status' type="text" placeholder="Enter status" />
                </Form.Group>
              
               
                <Button variant="primary" type="submit">
                        Add New Book
                </Button>
              </Form>

        </Modal.Body>
        
      </Modal>
            </div>
        )
    }
}
export default AddBook;

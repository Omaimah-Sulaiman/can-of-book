import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'

export class UpdatedForm extends Component {
    render() {
        return (
            <div>
                   <Modal show={this.props.show} onHide={this.props.handleClose}>
                    <Modal.Header closeButton>
                    <Modal.Title>Add  book</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                  <Form  onSubmit={(e)=>this.props.updateBook(e)}>
            
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Book Nane:</Form.Label>
                  <Form.Control type="text" placeholder="Enter Book Name"  defaultValue={this.props.bookObj.title} />
                  <Form.Label>Discription:</Form.Label>
                  <Form.Control type="text" placeholder="Enter Discription"  defaultValue={this.props.bookObj.description}  />
                  <Form.Label>status:</Form.Label>
                  <Form.Control type="text" placeholder="Enter status" defaultValue={this.props.bookObj.status} />
                </Form.Group>
              
         
                <Button variant="primary" type="submit">
                  Update
                </Button>
              </Form>
              
              </Modal.Body>
        
        </Modal>


            </div>
        )
    }
}

export default UpdatedForm
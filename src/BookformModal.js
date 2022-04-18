import React from "react";
import { Modal, Form, Button } from "react-bootstrap";
class BookFormModal extends React.Component {
    handleSubmit = (event) => {
        event.preventDefault();
        const newBook = {
            title: event.target.title.value,
            description: event.target.description.value,
            status: event.target.status.value,
        };
        this.props.createBook(newBook);
        this.props.handleClose();
    }
    render() {
        return (
            <Modal show={this.props.show} onHide={this.props.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add a new book here!</Modal.Title>
                </Modal.Header>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group className="mb-3" controlId="title">
                        <Form.Label>book title</Form.Label>
                        <Form.Control type="text" placeholder="book title here" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="description">
                        <Form.Label>Book description</Form.Label>
                        <Form.Control type="text" placeholder="book description here" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="status">
                        <Form.Label>Book status</Form.Label>
                        <Form.Control as="select" >
                            <option value="LIFE-CHANGING">life-changing</option>
                            <option value="FAVORITE FIVE">favorite five</option>
                            <option value="RECOMMENDED TO ME">recommended to me</option>
                        </Form.Control>
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
                <Modal.Footer>
                    <Button variant="secondary" onClick={this.props.handleClose}>
                        Close
                    </Button>

                </Modal.Footer>
            </Modal>
        )
    }
}
export default BookFormModal;
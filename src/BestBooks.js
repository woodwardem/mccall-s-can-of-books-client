import React from 'react';
import axios from 'axios';
import { Carousel } from 'react-bootstrap';
import bookImg from './bookimage.jpeg';
import Container from "react-bootstrap/Container";
class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    }
  }




  /* TODO: Make a GET request to your API to fetch all the books from the database  */
  componentDidMount = async () => {
    console.log('function fired off');
    try {
      const url = `http://localhost:3001/books`;
      const booksResponse = await axios.get(url);
      console.log(booksResponse.data);
      this.setState({ books: booksResponse.data });
    } catch (error) {
      console.log(error);
    }
  }


  render() {

    /* TODO: render all the books in a Carousel */

    return (
      <>
        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>

        {this.state.books.length ? (
          <Container >
            <Carousel>
              {this.state.books.map(book => (
                <Carousel.Item key={book._id}>
                  <img
                    className="d-block w-100"
                    src={bookImg}
                    alt={book.title}
                  />

                  <Carousel.Caption>
                    <h3>{book.title}</h3>
                    <p>{book.description}</p>
                    <p>Status: {book.status}</p>
                  </Carousel.Caption>
                </Carousel.Item>
              ))}
            </Carousel>
          </Container>
        ) : (
          <h3>No Books Found :(</h3>
        )}
      </>
    )
  }
}

export default BestBooks;

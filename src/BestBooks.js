import React from 'react';
import axios from 'axios';
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
          <p>Book Carousel coming soon</p>
        ) : (
          <h3>No Books Found :(</h3>
        )}
      </>
    )
  }
}

export default BestBooks;

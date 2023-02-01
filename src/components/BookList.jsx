import { Row } from 'react-bootstrap';
import { Component } from 'react'
import Container from 'react-bootstrap/esm/Container';
import SingleBook from './SingleBook';

class AllTheBooks extends Component {
    render() {
        return (
            <Container className='px-0'>
                <Row className='mx-1 justify-content-center'>
                    {this.props.FantasyBooks.map((book) => {
                        return (
                            <SingleBook singleBook={book} key={book.asin}></SingleBook>
                        )
                    })}
                </Row>
            </Container>
        );
    }
}

export default AllTheBooks;
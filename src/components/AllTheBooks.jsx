import {Row} from 'react-bootstrap';
import { Component} from 'react'
import Container from 'react-bootstrap/esm/Container';
import SingleBook from './SingleBook';

class AllTheBooks extends Component {
    render() {
        return (
            <Container className='px-0'>
                <Row className='mx-1 justify-content-center'>
                    {this.props.FantasyBooks.map(({asin, title, img, price, category}) => {
                        return (
                            <SingleBook key={asin} title={title} img={img} price={price} category={category}></SingleBook>
                                )})}
                </Row>  
            </Container>
        );
    }
}


export default AllTheBooks;
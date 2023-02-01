import {Card, Row, Col} from 'react-bootstrap';
import { Component} from 'react'
import FantasyBooks from '../books/fantasy.json'
import Container from 'react-bootstrap/esm/Container';

class AllTheBooks extends Component {
    render() {
        return (
            <Container className='px-0'>
                <Row className='mx-1 justify-content-center'>
                    
                    {FantasyBooks.map((books) => {
                        return (
                            <Col key={books.img} lg={2} md={6} xs={12} className="d-flex justify-content-center px-0">
                            <Card style={{ width: '18rem' }}>
                                <Card.Img key={books.img} variant="top" src={books.img} />
                            </Card>
                            </Col>
                    )
                    }
                    )
                    }
                    </Row>  
                </Container>
        );
    }
}


export default AllTheBooks;
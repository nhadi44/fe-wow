import hero from '../assets/img/hero/hero.png'
import Book from '../assets/books/book1.png'
import BookTwo from '../assets/books/book2.png'
import BookThree from '../assets/books/book3.png'
import BookFour from '../assets/books/book4.png'
import Sidebar from '../component/sidebar'

import { useState } from 'react'
import { Link } from 'react-router-dom'

import './style.css'
import { Container, Row, Col, Card, Button, Modal } from 'react-bootstrap'

// import bookList from './bookList'

function Homepage() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <Container fluid className="homepage">
            <Sidebar />
            <div className="main-content">
                <div className="hero-content text-center">
                    <img src={hero} alt="banner-book" className="hero-img" />
                </div>
                <div className="list-content">
                    <h1>List Book</h1>
                    <Row>
                        <Col md={3}>
                            <Card style={{ width: '14rem', borderRadius: '15px', border: 'none' }}>
                                <Card.Img variant="top" src={Book} />
                                <Card.Body style={{ paddingLeft: '0' }}>
                                    <Card.Title className="fw-bold fs-4">Serangkai</Card.Title>
                                    <Card.Text style={{ color: '#929292' }}>
                                        Valerie Patkar
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={3}>
                            <Card style={{ width: '14rem', borderRadius: '15px', border: 'none' }}>
                                <Card.Img variant="top" src={BookTwo} />
                                <Card.Body style={{ paddingLeft: '0' }}>
                                    <Card.Title className="fw-bold fs-4">Z1 - Sd/Mi Buku Siswa Tematik T...</Card.Title>
                                    <Card.Text style={{ color: '#929292' }}>
                                        Valerie Patkar
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={3}>
                            <Card style={{ width: '14rem', borderRadius: '15px', border: 'none' }}>
                                <Card.Img variant="top" src={BookThree} />
                                <Card.Body style={{ paddingLeft: '0' }}>
                                    <Card.Title className="fw-bold fs-4">Kabar Rahasia Dari Alam Kubu ...</Card.Title>
                                    <Card.Text style={{ color: '#929292' }}>
                                        Valerie Patkar
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={3}>
                            <Button className="btn-book" onClick={handleShow}>
                                <Card style={{ width: '14rem', borderRadius: '15px', border: 'none' }}>
                                    <Card.Img variant="top" src={BookFour} />
                                    <Card.Body style={{ paddingLeft: '0' }}>
                                        <Card.Title className="fw-bold fs-4">Tess on the
                                            Road</Card.Title>
                                        <Card.Text style={{ color: '#929292' }}>
                                            Valerie Patkar
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Button>
                            <Modal show={show} onHide={handleClose} centered className="text-center" size="lg">
                                <Link to="/homepage">
                                    <Modal.Body style={{ color: "#D60000" }}>please make a payment to read the latest books</Modal.Body>
                                </Link>
                            </Modal>
                        </Col>
                    </Row>
                </div>
            </div>
        </Container>
    )
}

export default Homepage;
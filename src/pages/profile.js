import Data from '../assets/img/hero/Data.png'
import Book from '../assets/books/book4.png'
import SidebarSubscribe from '../component/sidebarSubscribe'
import Avatar from '../assets/img/Avatar.png'

import { Link } from 'react-router-dom'

import './style.css'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'

// import bookList from './bookList'

function HomepageSubscribe() {
    return (
        <Container fluid className="homepage">
            <SidebarSubscribe />
            <div className="main-content">
                <div className="hero-content mb-4" style={{ marginLeft: "40px" }}>
                    <h1>Profile</h1>
                    <img src={Data} alt="banner-book" style={{ width: "1420px" }} />
                    <img src={Avatar} alt="" className="avatar-profile" />
                    <Button variant="danger" className="btn-profile">Edit Profile</Button>
                </div>
                <div className="list-content">
                    <h1>List Book</h1>
                    <Link to="/detail-book">
                        <Row>
                            <Col md={3}>
                                <Card style={{ width: '14rem', borderRadius: '15px', border: 'none' }}>
                                    <Card.Img variant="top" src={Book} />
                                    <Card.Body style={{ paddingLeft: '0' }}>
                                        <Card.Title className="fw-bold fs-2">Tess on the
                                            Road</Card.Title>
                                        <Card.Text style={{ color: '#929292' }}>
                                            Rachel Hartman
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Link>
                </div>
            </div>
        </Container>
    )
}

export default HomepageSubscribe;
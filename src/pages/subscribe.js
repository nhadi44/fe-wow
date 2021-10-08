import { Container, Form, Button, Modal } from 'react-bootstrap'
import Sidebar from '../component/sidebar'
import { useState } from 'react'
import { Link } from 'react-router-dom'

import './style.css'
import icon from '../assets/img/Wow.png'
import attach from '../assets/img/Attache.png'
export default function Subscribe() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <Container fluid className="homepage">
            <Sidebar />

            <div className="main-content d-flex justify-content-center">
                <Form className="subscribe-form">
                    <p className="fw-bold fs-3">Premium</p>
                    <p className="mt-4">Pay now and access all the latest book from <img src={icon} alt="wow-icon" /></p>
                    <p className="fw-bold mt-4 mb-3"><img src={icon} alt="wow-icon" /> :0981312323</p>
                    <Form.Group className="mb-3 ">
                        <Form.Control type="number" placeholder="Input Your Account Number" className="input-subscribe" />
                    </Form.Group>
                    <Form.Group className="mb-3 ">
                        <Form.Control type="file" placeholder="Input Your Account Number" className="input-subscribe" />
                    </Form.Group>
                    <Button variant="primary" className="btn-subscribe" onClick={handleShow}>
                        Send
                    </Button>
                </Form>
                <Modal show={show} onHide={handleClose} centered className="text-center" size="lg">
                    <Link to="/homepage-subscribe">
                        <Modal.Body style={{ color: "#29bd11" }}>Thank you for subscribing to premium, your premium package will be active after our admin approves your transaction, thank you</Modal.Body>
                    </Link>
                </Modal>
            </div>
        </Container>
    )
}
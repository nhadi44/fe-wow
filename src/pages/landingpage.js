
import background from '../assets/img/background.png';
import logo from '../assets/img/icon.png';
import './landingpage.css';
import { Button, Modal, Form } from 'react-bootstrap'
import { useState } from 'react'
import { useHistory } from 'react-router-dom'


function LandingPage() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [showSignUp, setShowSignUp] = useState(false);
    const handleCloseSignUp = () => setShowSignUp(false);
    const handleShowSignUp = () => setShowSignUp(true);

    let history = useHistory();

    const handleHomepage = () => {
        history.push('/homepage')
    }

    const handleAdmin = () => {
        history.push('/transaction')
    }
    return (
        <div>
            <div className="banner">
                <div className="banner-content">
                    <img src={logo} alt="" className="banner-logo" />
                    <h1 className="text-banner">Sign-up now and subscribe to enjoy all the cool and latest books - The best book rental service provider in Indonesia</h1>
                    <Button className="btn-signup" onClick={handleShow}>
                        Sign Up
                    </Button>

                    <Button className="btn-signin" onClick={handleShowSignUp}>
                        Sign In
                    </Button>

                    <Modal show={show} onHide={handleClose} centered>
                        <Modal.Body className="p-4" >
                            <h1>Sign Up</h1>
                            <Form className="mt-4">
                                <Form.Group className="mb-3" controlId="signUp.email">
                                    <Form.Control type="email" placeholder="Email" className="input-form" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="signUp.password">
                                    <Form.Control type="password" placeholder="Password" className="input-form" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="signUp.name">
                                    <Form.Control type="text" placeholder="Full Name" className="input-form" />
                                </Form.Group>
                                <Button className="btn-signin-form" onClick={handleHomepage}>Sign In</Button>
                                <p className="text-center mt-3 pb-0 fs-5">Already have an account? Klik Here</p>
                            </Form>
                        </Modal.Body>
                    </Modal>

                    <Modal show={showSignUp} onHide={handleCloseSignUp} centered>
                        <Modal.Body className="p-4" >
                            <h1>Sign In</h1>
                            <Form className="mt-4">
                                <Form.Group className="mb-3" controlId="signIn.email">
                                    <Form.Control type="email" placeholder="Email" className="input-form" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="signIn.password">
                                    <Form.Control type="password" placeholder="Password" className="input-form" />
                                </Form.Group>

                                <Button className="btn-signin-form" onClick={handleAdmin}>Sign In</Button>

                                <p className="text-center mt-3 pb-0 fs-5">Don't have account? Klik Here</p>
                            </Form>
                        </Modal.Body>
                    </Modal>
                </div>
                <img src={background} alt="" className="background-banner" />
            </div>
        </div>
    )
}

export default LandingPage;
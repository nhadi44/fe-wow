import React from "react";
import logo from '../assets/img/icon.png';
import bookread from '../assets/img/readbook.png'
import profile from '../assets/img/profile-admin.png'
import dropdown from '../assets/img/dropdown.png'
import addbook from '../assets/img/knowledge.png'

import { Table, Form, Button } from 'react-bootstrap'
import './style.css'

import { Link } from 'react-router-dom'
export default function ReadBook() {
    return (
        <div className="add-book">
            <div className="logo-wow">
                <Link to="/transaction">
                    <img src={logo} alt="logo" className="logo-read" />
                </Link>
                <Link to="/">
                    <img src={profile} alt="logo" className="profile-admin" />
                </Link>
            </div>
            <div className="form-add container">
                <Form>
                    <h1 className="mb-5">Add Book</h1>
                    <Form.Group className="mb-3">
                        <Form.Control type="text" placeholder="Title" className="input-book" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Control type="text" placeholder="Publication Date" className="input-book" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Control type="text" placeholder="Pages" className="input-book" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Control type="text" placeholder="Author" className="input-book" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Control type="number" placeholder="ISBN" className="input-book" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Control as="textarea" rows={10} className="input-book-area" placeholder="About this Book" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Control type="file" placeholder="ISBN" className="input-book" />
                    </Form.Group>
                    <Button variant="danger" type="submit">
                        Add Book <img src={addbook} alt="" />
                    </Button>
                </Form>
            </div>
        </div>
    )
}
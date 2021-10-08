import React from "react";
import logo from '../assets/img/icon.png';
import bookread from '../assets/img/readbook.png'
import profile from '../assets/img/profile-admin.png'
import dropdown from '../assets/img/dropdown.png'
import { Table } from 'react-bootstrap'
import './style.css'

import { Link } from 'react-router-dom'
export default function ReadBook() {
    return (
        <div className="read-book">
            <div className="logo-wow">
                <Link to="/homepage">
                    <img src={logo} alt="logo" className="logo-read" />
                </Link>
                <Link to="/">
                    <img src={profile} alt="logo" className="profile-admin" />
                </Link>
            </div>
            <div className="table-transaction">
                <h2 className="mb-4">Incomming Transaction</h2>
                <Table striped hover size="sm">
                    <thead className="text-danger">
                        <tr>
                            <th>No</th>
                            <th>Users</th>
                            <th>Bukti Transfer</th>
                            <th>Remaining Active</th>
                            <th>Status User</th>
                            <th>Status Payment</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody style={{ height: "550px" }}>
                        <tr>
                            <td>1</td>
                            <td>Radif Ganteng</td>
                            <td>bca.jpg</td>
                            <td>26 / Hari</td>
                            <td className="text-success">Active</td>
                            <td className="text-success">Approve</td>
                            <td><img src={dropdown} alt="" /></td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Haris Rahman</td>
                            <td>bni.jpg</td>
                            <td>26 / Hari</td>
                            <td className="text-success">Active</td>
                            <td className="text-success">Approve</td>
                            <td><img src={dropdown} alt="" /></td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Amin Subagiyo</td>
                            <td>permata.jpg</td>
                            <td>0 / Hari</td>
                            <td className="text-danger">Not Active</td>
                            <td className="text-danger">Cancel</td>
                            <td><img src={dropdown} alt="" /></td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>Haris Astina</td>
                            <td>permata.jpg</td>
                            <td>0 / Hari</td>
                            <td className="text-danger">Not active</td>
                            <td className="text-warning">Pending</td>
                            <td><img src={dropdown} alt="" /></td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>Aziz Oni On</td>
                            <td>bi.jpg</td>
                            <td>0 / Hari</td>
                            <td className="text-danger">Not active</td>
                            <td className="text-warning">Pending</td>
                            <td><img src={dropdown} alt="" /></td>
                        </tr>
                        <tr>
                            <td>6</td>
                            <td>Sugeng No Pants</td>
                            <td>bni.jpg</td>
                            <td>0 / Hari</td>
                            <td className="text-danger">Not Active</td>
                            <td className="text-warning">Pending</td>
                            <td><img src={dropdown} alt="" /></td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </div>
    )
}
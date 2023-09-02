import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from './sidebar'
import Header from '../../component/heback'

const ViewTeacher = () => {
    const [teacher, setTeacher] = useState([]);
    useEffect(() => {
        axios.get(`http://localhost/ReactProject/api/api-fetch-allteacher.php`).then(res => {
            setTeacher(res.data);
        });
    }, []);


    const deleteTeacher = (e, tea_id) => {
        const click = e.currentTarget;
        e.preventDefault();

        if (confirm("Are You Sure?")) {
            axios.get(`http://localhost/ReactProject/api/api-teacher.php?id=${tea_id}`).then(res => {
                alert("Done")
                click.closest("tr").remove()
            })
        } else { }
    }


    return (
        <>
            <Header />
            <div className="container d-flex">
                <div className="col-md-3">
                    <Sidebar />
                </div>
                <div className="col-md-9">
                    <div className="container">
                        <div className="row">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col">Teacher Name</th>
                                        <th scope="col">Teacher Fee</th>
                                        <th scope="col">Class</th>
                                        <th scope="col">Teacher Subject</th>
                                        <th scope="col">Number</th>
                                        <th scope="col">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                        {teacher.length > 0 && (
                                            teacher.map((item, index) => (
                                                <tr key={index}>
                                                    <td>{item.tea_name}</td>
                                                    <td>{item.tea_fee}</td>
                                                    <td>{item.tea_class}</td>
                                                    <td>{item.tea_subject}</td>
                                                    <td>{item.tea_number}</td>
                                                    <td>
                                                        <Link to={`/teacher/${item.tea_id}/edit`} className='btn btn-success'>Update</Link>
                                                        <button className='btn btn-danger' onClick={(e) => deleteTeacher(e, item.tea_id)}>Delete</button>
                                                    </td>
                                                </tr>
                                            ))
                                        )}
                                    </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ViewTeacher;

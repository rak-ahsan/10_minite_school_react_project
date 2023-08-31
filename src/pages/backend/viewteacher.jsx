import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Sidebar from './sidebar'
import Header from '../../component/heback'
const viewteacher = () => {

    const [teacher, setTeacher] = useState([]);
    useEffect(() => {
        axios.get(`http://localhost/ReactProject/api/api-fetch-allteacher.php`).then(res => {
            setTeacher(res.data)
        });
    }, [])

    var TeacherDetalis = '';

    TeacherDetalis = teacher.map((item, index) => {
        return (
            <tr key={index}>
                <td>{item.tea_name}</td>
                <td>{item.tea_fee}</td>
                <td>{item.tea_class}</td>
                <td>{item.tea_subject}</td>
                <td>{item.tea_number}</td>
                <td> <Link to = {`/teacher/${item.tea_id}/edit`}className='btn btn-success'>edit</Link></td>
                <td>delete</td>
            </tr>
        )
    })

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
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th scope="col">Teacher Name</th>
                                        <th scope="col">Teacher Fee</th>
                                        <th scope="col">Class</th>
                                        <th scope="col">Teacher Subject</th>
                                        <th scope="col">Number</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {TeacherDetalis}
                                </tbody>
                            </table>
                        </div>
                    </div>


                </div>
            </div>
        </>
    )
}

export default viewteacher
import React, { useEffect, useState } from 'react'
import Form from 'react-bootstrap/Form';
import Sidebar from './sidebar'
import Header from '../../component/heback'
import axios from 'axios'
import { useParams } from 'react-router-dom';

function teacherEdit() {

    let { id } = useParams();

    const [teacher, setTeacher] = useState({})

    const input = (e) => {
        e.persist();
        setTeacher({ ...teacher, [e.target.name]: e.target.value })
    }
    const update = (e) => {
        e.preventDefault()
        const data = {
            name: teacher.tea_name,
            fee: teacher.tea_fee,
            class: teacher.tea_class,
            subject: teacher.tea_subject,
            role: teacher.tea_role,
            number: teacher.tea_number,
            username: teacher.tea_username,
            password: teacher.tea_password,
        }
        axios.put(`http://localhost/ReactProject/api/api-update-teacher.php?id=${id}`, data).then(res => {
            alert("successful");
        });

    }
    useEffect(() => {
        axios.get(`http://localhost/ReactProject/api/api-fetch-singleteacher.php?id=${id}`).then(res => {
            console.log(res);
            setTeacher(res.data)

        });
    }, [id])


    const [clases, setClass] = useState([]);
    useEffect(() => {
        axios.get(`http://localhost/ReactProject/api/api-fetch-class.php`).then(res => {
            setClass(res.data)
        });
    }, [])

    const [subject, SetSubject] = useState([]);
    useEffect(() => {
        axios.get(`http://localhost/ReactProject/api/api-fetch-sunject.php`).then(res => {
            SetSubject(res.data)
        });
    }, [])

    const [role, SetRole] = useState([]);
    useEffect(() => {
        axios.get(`http://localhost/ReactProject/api/api-fetch-role.php`).then(res => {
            SetRole(res.data)
        });
    }, [])
    return (
        <>
            <Header />
            <div className="container d-flex">
                <div className="col-md-3">
                    <Sidebar />
                </div>
                <div className="col-md-9">
                    <div className="container mt-5 justify-content-center d-flex">
                        <form class="row g-3" onSubmit={update}>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">শিক্ষকের নাম</label>
                                <input type="text" class="form-control" value={teacher.tea_name} placeholder="Hsc 2025" onChange={input} name='tea_name' />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlTextarea1" class="form-label">শিক্ষকের  ফি</label>
                                <input type="text" class="form-control" value={teacher.tea_fee} placeholder="Course Fee" name='tea_fee' onChange={input} />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlTextarea1" class="form-label">শ্রেনি</label>
                                <Form.Select aria-label="Default select example" value={teacher.tea_class} name='tea_class' onChange={input}>
                                    <option>Open this select menu</option>
                                    {clases.map((item, index) => (
                                        <option key={index} value={item.class_id}>
                                            {item.class_name}
                                        </option>
                                    ))}
                                </Form.Select>
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlTextarea1" class="form-label">সাবজেক্ট</label>
                                <Form.Select aria-label="Default select example" name='tea_subject' value={teacher.tea_subject} onChange={input}>
                                    <option>Open this select menu</option>
                                    {subject.map((item, index) => (
                                        <option key={index} value={item.sub_id}>
                                            {item.sub_name}
                                        </option>
                                    ))}
                                </Form.Select>
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlTextarea1" class="form-label">রোল</label>
                                <Form.Select aria-label="Default select example" name='role' value={teacher.tea_role} onChange={input}>
                                    <option>Open this select menu</option>
                                    {role.map((item, index) => (
                                        <option key={index} value={item.role_id}>
                                            {item.role_name}
                                        </option>
                                    ))}
                                </Form.Select>
                            </div>
                            <div class="mb-3">
                                <label for="staticEmail2" class="form-label">নাম্বার</label>
                                <input type="text" class="form-control" id="inputPassword2" placeholder="Number" name='tea_number' value={teacher.tea_number} onChange={input} />
                            </div>
                            <div class="mb-3">
                                <label for="staticEmail2" class="form-label">ইউজার নাম</label>
                                <input type="text" class="form-control" id="inputPassword2" placeholder="username" name='tea_username' value={teacher.tea_username} onChange={input} />
                            </div>
                            <div class="mb-3">
                                <label for="staticEmail2" class="form-label">পাসওয়ার্ড</label>
                                <input type="text" class="form-control" id="inputPassword2" placeholder="username" name='tea_password' value={teacher.tea_password} onChange={input} />
                            </div>
                            <div class="col-auto">
                                <button type="submit" class="btn btn-primary mb-3">Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </>
    )
}

export default teacherEdit
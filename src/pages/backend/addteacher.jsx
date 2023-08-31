import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import Sidebar from './sidebar'
import Header from '../../component/heback'
import axios from 'axios'

function studen() {

    const [teacher, setTeacher] = useState({
        name: '',
        fee: '',
        class: '',
        subject: '',
        role: '',
        number: '',
        username: '',
        password: ''

    })

    const input = (e) => {
        e.persist();
        setTeacher({ ...teacher, [e.target.name]: e.target.value })
    }


    const reset =()=>{
        setTeacher({
            name: "",
            fee: "",
            class: "",
            subject: "",
            role: "",
            number: "",
            username: "",
            password: "",
        });
    }

    const save = (e) => {
        e.preventDefault()
        const data = {
            name: teacher.name,
            fee: teacher.fee,
            class: teacher.class,
            subject: teacher.subject,
            role: teacher.role,
            number: teacher.number,
            username: teacher.username,
            password: teacher.password,
        }
        console.log(data);
        axios.post(`http://localhost/ReactProject/api/api-insert-teacher.php`, data).then(res => {
            alert("Data Inserted");
            reset()
            
        });

    }
    return (
        <>
            <Header />
            <div className="container d-flex">
                <div className="col-md-3">
                    <Sidebar />
                </div>
                <div className="col-md-9">
                    <div className="container mt-5 justify-content-center d-flex">
                        <form class="row g-3" onSubmit={save}>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">শিক্ষকের নাম</label>
                                <input type="text" class="form-control" value={teacher.name} placeholder="Hsc 2025" onChange={input} name='name' />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlTextarea1" class="form-label">শিক্ষকের  ফি</label>
                                <input type="text" class="form-control" value={teacher.fee} placeholder="Course Fee" name='fee' onChange={input} />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlTextarea1" class="form-label">শ্রেনি</label>
                                <Form.Select aria-label="Default select example" value={teacher.class} name='class' onChange={input}>
                                    <option>Open this select menu</option>
                                    <option value="1">SSC</option>
                                    <option value="2">HSC</option>
                                    <option value="3">Ten</option>
                                    <option value="3">Nine</option>
                                </Form.Select>
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlTextarea1" class="form-label">সাবজেক্ট</label>
                                <Form.Select aria-label="Default select example" name='subject' value={teacher.subject} onChange={input}>
                                    <option>Open this select menu</option>
                                    <option value="1">SSC</option>
                                    <option value="2">HSC</option>
                                    <option value="3">Ten</option>
                                    <option value="3">Nine</option>
                                </Form.Select>
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlTextarea1" class="form-label">রোল</label>
                                <Form.Select aria-label="Default select example" name='role' value={teacher.role} onChange={input}>
                                    <option>Open this select menu</option>
                                    <option value="1">SSC</option>
                                    <option value="2">HSC</option>
                                    <option value="3">Ten</option>
                                    <option value="3">Nine</option>
                                </Form.Select>
                            </div>
                            <div class="mb-3">
                                <label for="staticEmail2" class="form-label">নাম্বার</label>
                                <input type="text" class="form-control" id="inputPassword2" placeholder="Number" name='number' value={teacher.number} onChange={input} />
                            </div>
                            <div class="mb-3">
                                <label for="staticEmail2" class="form-label">ইউজার নাম</label>
                                <input type="text" class="form-control" id="inputPassword2" placeholder="username" name='username' value={teacher.username} onChange={input} />
                            </div>
                            <div class="mb-3">
                                <label for="staticEmail2" class="form-label">পাসওয়ার্ড</label>
                                <input type="text" class="form-control" id="inputPassword2" placeholder="username" name='password' value={teacher.password} onChange={input} />
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

export default studen
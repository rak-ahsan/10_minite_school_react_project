import React, { useEffect, useState } from 'react'
import Header from "../../../component/heback"
import Sidebar from '../sidebar'
import Frominp from '../../../component/frominp';
import { Form } from 'react-bootstrap';
import axios from 'axios';
import BtnSubmit from '../../../component/bntsubmit';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const course = () => {
    const navigate = useNavigate();

    const [course, setCourse] = useState({

        coursename: "",
        coursefee: "",
        courseduretion: "",
        couseclass: "",
        coursesubject: "",

    });

    const input = (e) => {

        e.persist();
        setCourse({ ...course, [e.target.name]: e.target.value });
    }

    const [courseimg, setCourseimg] = useState({
        courseimg:''
    });
    const handleFileChange = (e) => {
        setCourseimg(e.target.files[0]);
    };

    const saveCourse = (e) => {

        e.preventDefault();

        const formData = new FormData();
        formData.append('courseimg', courseimg); 
        formData.append('coursename', course.coursename);
        formData.append('coursefee', course.coursefee);
        formData.append('courseduretion', course.courseduretion);
        formData.append('couseclass', course.couseclass);
        formData.append('coursesubject', course.coursesubject);
console.log(formData);

        axios.post(`http://localhost/ReactProject/api/api-insert-course.php`, formData).then(res => {
            console.log(res);
            Swal.fire(
                'Course Added Successfully!',
                '',
                'success'
              )
              navigate('/viewcourse')

        });
        
    };




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


    return (
        <><Header /><div className="container d-flex">
            <div className="col-md-3">
                <Sidebar />
            </div>
            <div className="col-md-9">
                <div className="container mt-3 justify-content-spacebetween d-flex">
                    <form className="row g-3" onSubmit={saveCourse} encType="multipart/form-data">
                        <Frominp
                            title="কোর্সের নাম"
                            placeholder="কোর্সের নাম"
                            type="text"
                            name="coursename"
                            onChange={input}
                            value={course.coursename}
                            className="col-md-6"
                        />

                        <Frominp
                            title="কোর্সের দাম"
                            placeholder="কোর্সের দাম"
                            type="text"
                            name="coursefee"
                            onChange={input}
                            value={course.coursefee}
                            className="col-md-6"
                        />

                        <Frominp
                            title="কোর্সের চলমান সময়"
                            placeholder="কোর্সের চলমান সময়"
                            type="text"
                            name="courseduretion"
                            onChange={input}
                            value={course.courseduretion}
                            className="col-md-6"
                        />

                        <div className="mb-3 col-md-6">
                            <label htmlFor="exampleFormControlTextarea1" className="form-label">শ্রেনি নির্বাচন করুন</label>
                            <Form.Select aria-label="Default select example" value={course.couseclass} name='couseclass' onChange={input}>
                                <option>Open this select menu</option>
                                {clases.map((item, index) => (
                                    <option key={index} value={item.class_id}>
                                        {item.class_name}
                                    </option>
                                ))}
                            </Form.Select>
                        </div>
                        <div className="mb-3 col-md-6">
                            <label htmlFor="exampleFormControlTextarea1" className="form-label">সাবজেক্ট</label>
                            <Form.Select aria-label="Default select example" name='coursesubject' value={course.coursesubject} onChange={input}>
                                <option>Open this select menu</option>
                                {subject.map((item, index) => (
                                    <option key={index} value={item.sub_id}>
                                        {item.sub_name}
                                    </option>
                                ))}
                            </Form.Select>
                        </div>
                        <Frominp
                            title="ছবি"
                            type="file"
                            name="courseimg"
                            onChange={handleFileChange}
                            className="col-md-6"
                        />
                        <BtnSubmit text="Submit" className="btn-success" type="submit" />

                    </form>
                </div>
            </div>
        </div></>
    )
}

export default course
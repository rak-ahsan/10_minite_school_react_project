import React, { useEffect, useState } from "react";
import Header from "../../../component/heback";
import Sidebar from "../sidebar";
import Frominp from "../../../component/frominp";
import Form from "react-bootstrap/Form";
import Bntsubmit from "../../../component/bntsubmit";
import axios from "axios";

const addcourse = () => {
  const [course, setCourse] = useState({
    course_name: "",
    class: "",
    subject: "",
    price: "",
    duretion: "",
  });

  const reset = () => {
    setStudent({
      course_name: "",
      class: "",
      subject: "",
      price: "",
      duretion: "",
    });
  };

  const input = (e) => {
    e.persist();
    setCourse({ ...course, [e.target.name]: e.target.value });
  };

  const save = (e) => {
    e.preventDefault();
    const data = {
      studentname: student.studentname,
      studentnumber: student.studentnumber,
      studentemail: student.studentemail,
      studentaddress: student.studentaddress,
      studentusername: student.studentusername,
      studentpassword: student.studentpassword,
      studentclass: student.studentclass,
      studentrole: student.studentrole,
    };
    console.log(data);
    axios
      .post(`https://10ms.rakahsan.online/api/api-insert-student.php`, data)
      .then((res) => {
        Swal.fire("Student Record Stored Successfully!", "", "success");
        console.log(res);
        reset();
      });
  };

  const [subject, SetSubject] = useState([]);
  useEffect(() => {
    axios
      .get(`https://10ms.rakahsan.online/api/api-fetch-sunject.php`)
      .then((res) => {
        SetSubject(res.data);
      });
  }, []);

  const [clases, setClass] = useState([]);
  useEffect(() => {
    axios
      .get(`https://10ms.rakahsan.online/api/api-fetch-class.php`)
      .then((res) => {
        setClass(res.data);
      });
  }, []);

  const [role, SetRole] = useState([]);
  useEffect(() => {
    axios
      .get(`https://10ms.rakahsan.online/api/api-fetch-role.php`)
      .then((res) => {
        SetRole(res.data);
      });
  }, []);
  return (
    <>
      <Header />
      <div className="container d-flex">
        <div className="col-md-3">
          <Sidebar />
        </div>
        <div className="col-md-9">
          <div className="container mt-3 justify-content-center d-flex">
            <form className="row g-3" onSubmit={save}>
              <Frominp
                title=" কোর্স এর নাম"
                placeholder="কোর্স এর নাম"
                type="text"
                name="coursename"
                onChange={input}
                value={course.course_name}
              />
              <div className="mb-3 col-md-6">
                <label
                  htmlFor="exampleFormControlTextarea1"
                  className="form-label"
                >
                  শ্রেনি নির্বাচন করুন
                </label>
                <Form.Select
                  aria-label="Default select example"
                  value={course.class}
                  name="studentclass"
                  onChange={input}
                >
                  <option>Open this select menu</option>
                  {clases.map((item, index) => (
                    <option key={index} value={item.class_id}>
                      {item.class_name}
                    </option>
                  ))}
                </Form.Select>
              </div>

              <div className="mb-3 col-md-6">
                <label
                  htmlFor="exampleFormControlTextarea1"
                  className="form-label"
                >
                  সাবজেক্ট
                </label>
                <Form.Select
                  aria-label="Default select example"
                  name="subject"
                  value={course.subject}
                  onChange={input}
                >
                  <option>Open this select menu</option>
                  {subject.map((item, index) => (
                    <option key={index} value={item.sub_id}>
                      {item.sub_name}
                    </option>
                  ))}
                </Form.Select>
              </div>
              <Bntsubmit
                text="ADD STUDENT"
                className="btn-success"
                type="submit"
              />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default addcourse;

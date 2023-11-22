import React, { useState, useEffect } from "react";
import Header from "../../../component/heback";
import Sidebar from "../sidebar";
import Frominp from "../../../component/frominp";
import Bntsubmit from "../../../component/bntsubmit";
import Form from "react-bootstrap/Form";
import { useParams } from "react-router-dom";
import axios from "axios";

const Editstudent = () => {
  let { id } = useParams();

  const [student, setStudent] = useState({});

  const input = (e) => {
    e.persist();
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const update = (e) => {
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

    axios
      .put(
        `https://10ms.rakahsan.online/api/api-update-student.php?id=${id}`,
        data
      )
      .then((res) => {
        console.log(res);
        alert("successful");
      });
  };

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

  useEffect(() => {
    axios
      .get(
        `https://10ms.rakahsan.online/api/api-fetch-single-student.php?id=${id}`
      )
      .then((res) => {
        console.log(res);
        setStudent(res.data);
      });
  }, [id]);

  return (
    <>
      <Header />
      <div className="container d-flex">
        <div className="col-md-3">
          <Sidebar />
        </div>
        <div className="col-md-9">
          <div className="container mt-3 justify-content-center d-flex">
            <form className="row g-3" onSubmit={update}>
              <Frominp
                title="শিক্ষার্থী নাম"
                placeholder="শিক্ষার্থী নাম"
                type="text"
                name="studentname"
                onChange={input}
                value={student.studentname}
              />

              <Frominp
                title="শিক্ষার্থী নাম্বার"
                placeholder="শিক্ষার্থী নাম্বার"
                type="text"
                name="studentnumber"
                onChange={input}
                value={student.studentnumber}
              />
              <Frominp
                title="শিক্ষার্থী ইমেইল"
                placeholder="শিক্ষার্থী ইমেইল"
                type="text"
                name="studentemail"
                onChange={input}
                value={student.studentemail}
              />
              <Frominp
                title="শিক্ষার্থী ঠিকানা"
                placeholder="শিক্ষার্থী ঠিকানা"
                type="text"
                name="studentaddress"
                onChange={input}
                value={student.studentaddress}
              />
              <Frominp
                title="UserName"
                placeholder="UserName"
                type="text"
                name="studentusername"
                onChange={input}
                value={student.studentusername}
              />
              <Frominp
                title="Password"
                placeholder="Password"
                type="text"
                name="studentpassword"
                onChange={input}
                value={student.studentpassword}
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
                  value={student.studentclass}
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
                  ইউজার রোল
                </label>
                <Form.Select
                  aria-label="Default select example"
                  name="studentrole"
                  value={student.studentrole}
                  onChange={input}
                >
                  <option>Open this select menu</option>
                  {role.map((item, index) => (
                    <option key={index} value={item.role_id}>
                      {item.role_name}
                    </option>
                  ))}
                </Form.Select>
              </div>
              <Bntsubmit
                text="Update Student"
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

export default Editstudent;

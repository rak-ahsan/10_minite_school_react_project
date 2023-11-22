import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../sidebar";
import Header from "../../../component/heback";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";

const booking = () => {
  const [booking, setBooking] = useState([]);
  useEffect(() => {
    axios
      .get(`https://10ms.rakahsan.online/api/api-fetch-booking.php`)
      .then((res) => {
        setBooking(res.data);
        console.log(res);
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
          <div className="container">
            <div className="row">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col"> Candidate Name</th>
                    <th scope="col">Course Name</th>
                    <th scope="col">Course Fee</th>
                    <th scope="col">Number</th>
                    <th scope="col">Payment</th>
                    <th scope="col">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {booking.length > 0 &&
                    booking.map((item, index) => (
                      <tr key={index}>
                        <td>{item.name}</td>
                        <td>{item.coursename}</td>
                        <td>{item.coursefee}</td>
                        <td>{item.number}</td>
                        <td>{item.paymentMethod}</td>
                        <td>
                          <Link
                            to={`/Editbook/${item.tea_id}/`}
                            className="btn btn-success mx-2"
                          >
                            <FontAwesomeIcon icon={faPen} />
                          </Link>
                        </td>
                        {/* <td>
                                            <button className='btn btn-danger' onClick={(e) => deleteTeacher(e, item.tea_id)}><FontAwesomeIcon icon={faTrash} style={{ color: "#ffffff", }} /></button>
                                        </td> */}
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default booking;

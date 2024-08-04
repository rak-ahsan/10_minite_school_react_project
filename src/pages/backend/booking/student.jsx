import React, { useEffect, useState } from "react";
import Header from "../../../component/heback";
import Frominp from "../../../component/frominp";
import BtnSubmit from "../../../component/bntsubmit";
import axios from "axios";
import { Link } from "react-router-dom";

const Student = () => {
  const baseURL = process.env.NEXT_PUBLIC_BACKEND_URL;

  const [comment, setComment] = useState({
    comment: "",
  });

  const [comments, setComments] = useState([]);

  const input = (e) => {
    e.persist();
    setComment({ ...comment, [e.target.name]: e.target.value });
  };

  const reset = () => {
    setComment({
      comment: "",
    });
  };
  const save = (e) => {
    e.preventDefault();

    const data = {
      comment: comment.comment,
    };

    axios
      .post(`${baseURL}/api-insert-comment.php`, data)
      .then((res) => {
        axios
          .get(`${baseURL}/api-fetch-comment.php`)
          .then((res) => {
            setComments(res.data);
          });

        reset();
      });
  };

  useEffect(() => {
    axios
      .get(`${baseURL}/api-fetch-comment.php`)
      .then((res) => {
        setComments(res.data);
      });
  }, []);

  return (
    <>
      <Header />
      <div className="container">
        <form onSubmit={save}>
          <Frominp
            title="Post Your Comment"
            placeholder="comment"
            type="text"
            name="comment"
            className="col-md-4 mt-5"
            onChange={input}
            value={comment.comment}
          />
          <BtnSubmit text="ADD Comment" className="btn-success" type="submit" />
        </form>

        {comments.length > 0 &&
          comments.map((item, index) => (
            <tr key={index}>
              <td>{item.comment}</td>
            </tr>
          ))}
      </div>
    </>
  );
};

export default Student;

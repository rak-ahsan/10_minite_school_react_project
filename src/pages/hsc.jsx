import Card from "../component/card";
import Toptext from "../component/toptext";
import React, { useState, useEffect } from "react";
import Footer from "../component/footer";
import Head from "../component/he";
import axios from "axios";

const hsc = () => {
  const [course, setCourse] = useState([]);

  useEffect(() => {
    axios
      .get(`https://10ms.rakahsan.online/api/api-fetch-course.php`)
      .then((res) => {
        setCourse(res.data);
        console.log(res);
      });
  }, []);
  
  return (
    <>
      <Head />
      <div className="container">
        <div className="row">
          <Toptext
            title="SSC ও HSC শিক্ষার্থীদের জন্য"
            sht="পুরো মাস জুড়ে টেন মিনিট স্কুলের নির্দিষ্ট কোর্সসমূহ পেয়ে যান বিশেষ মূল্যে। এবার শেখার শুরু হোক টেন মিনিট স্কুলের সাথে!"
          />

          {course.map((item, index) => (
            <div className="col-md-3" key={index}>
              <Card
                title={item.coursename}
                img={`images/${item.courseimg}`}
                price={item.coursefee}
                sub={item.courseduretion}
                url={`/buy/${item.course_id}`}
              />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default hsc;

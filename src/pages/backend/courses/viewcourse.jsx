import React, { useEffect, useState } from 'react'
import Header from "../../../component/heback"
import Sidebar from '../sidebar'
import Tables from '../../../component/tables'
import axios from 'axios'


const viewcourse = () => {


    const [course, setCourse] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost/ReactProject/api/api-fetch-course.php`).then(res => {
            setCourse(res.data)
            console.log(res);
        });
    }, []);
    return (
        <><Header />
            <div className="container d-flex">
                <div className="col-md-3">
                    <Sidebar />
                </div>
                <div className="col-md-9">
                    <Tables

                        // For Th

                        t1="শিক্ষার্থী নাম"
                        t2="শিক্ষার্থী নাম্বার"
                        t3="শিক্ষার্থী ইমেইল"
                        t4="শ্রেনি"
                        t5="শিক্ষার্থী ঠিকানা"
                        t10="Action"

                        // for map function
                        name={course}


                        // for map TD
                        n1={"coursename"}
                        n2={"coursefee"}
                        n3={"courseduretion"}
                        n4={"couseclass"}
                        n5={"coursesubject"}

                        
                        con={1}
                        // for image
                        path={'images'}
                        imageName={`courseimg`}

                        // for link and passing id edit option
                        link={"editstudent"}
                        id={"course_id"}

                        dlt={''}


                    />

                </div>
            </div></>
    )
}

export default viewcourse
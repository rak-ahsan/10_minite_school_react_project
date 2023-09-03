import React, { useState, useEffect } from 'react'
import Tables from '../../../component/tables'
import Header from '../../../component/heback';
import Sidebar from '../sidebar';
import axios from 'axios';
import Swal from 'sweetalert2'
const viewstudent = () => {

    const [student, setStudent] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost/ReactProject/api/api-fetch-allstudent.php`).then(res => {
            setStudent(res.data)
            console.log(res);
        });
    }, []);

    const studelete = (e, stu_id) => {
        const click = e.currentTarget;
        e.preventDefault();

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
                axios.get(`http://localhost/ReactProject/api/api-teacher-delete.php?id=${stu_id}`).then(res => {
                    Swal.fire(
                        'Success!',
                        '',
                        'success'
                      )
                    click.closest("tr").remove();                
                    
                })

              Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
            }
          })
    }
    return (

        <>
            <Header />
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
                        name={student}


                        // for map TD
                        n1={"studentname"}
                        n2={"studentnumber"}
                        n3={"studentemail"}
                        n4={"class_name"}
                        n5={"studentaddress"}


                        // for link and passing id edit option
                        link={"editstudent"}
                        id={"stu_id"}

                        dlt={studelete}


                    />

                </div>
            </div>
        </>

    )
}

export default viewstudent
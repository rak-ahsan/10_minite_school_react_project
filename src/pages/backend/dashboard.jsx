import React, { useEffect } from 'react'
import Sidebar from './sidebar'
import Header from '../../component/heback'

const Dashboard = () => {

    let name = localStorage.getItem('name');
    let subject = localStorage.getItem('subject');
    let class_name = localStorage.getItem('class_name');

    const times = () => {
        let now = new Date();
        let options = { timeZone: 'Asia/Dhaka', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' };
        return new Intl.DateTimeFormat('en-US', options).format(now);
    }

    return (
        <>
            <Header />
            <div className="container d-flex">
                <div className="col-md-3">
                    <Sidebar />
                </div>
                <div className="col-md-9">
                    <div className="card p-3 m-2" style={{ width: '18rem' }}>
                        <div className="card-body">
                            <h5 className="card-title">স্বাগতম <br />{name}</h5>
                            <p className="card-text"> আপনি {class_name} শ্রেনির <br /> {subject} শিক্ষক হিসেবে আমাদের সাথে নিযুক্ত আছেন</p>
                            <a className="btn btn-primary">{times()}</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard;

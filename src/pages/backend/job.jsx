import React from 'react'
import Form from 'react-bootstrap/Form';
import Sidebar from './sidebar'
import Header from '../../component/heback'

function studen() {
    return (
        <>
            <Header />
            <div className="container d-flex">
                <div className="col-md-3">
                    <Sidebar />
                </div>
                <div className="col-md-9">
                    <div className="container mt-5 justify-content-center d-flex">
                        <form class="row g-3">
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">শিক্ষকের নাম</label>
                                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Hsc 2025" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlTextarea1" class="form-label">শিক্ষকের  ফি</label>
                                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Course Fee" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlTextarea1" class="form-label">শিক্ষক</label>
                                <Form.Select aria-label="Default select example">
                                    <option>Open this select menu</option>
                                    <option value="1">SSC</option>
                                    <option value="2">HSC</option>
                                    <option value="3">Ten</option>
                                    <option value="3">Nine</option>
                                </Form.Select>
                            </div>
                            <div class="mb-3">
                                <label for="staticEmail2" class="visually-hidden">নাম্বার</label>
                                <input type="text" class="form-control" id="inputPassword2" placeholder="Number" />
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
import React from 'react'
import Header from '../../../component/heback'
import Sidebar from '../sidebar'
import Form from 'react-bootstrap/Form';

const editbook = () => {

    function submit(){
        alert("success")
    }
    return (
        <>
            <Header />
            <div className="container d-flex">
                <div className="col-md-3">
                    <Sidebar />
                </div>
                <div className="col-md-9">
                    <div class="mb-3">
                        <label for="exampleFormControlTextarea1" class="form-label">Payment</label>
                        <Form.Select aria-label="Default select example" name='role' >
                            <option>Open this select menu</option>
                            <option>Compelete</option>
                            <option>Pending</option>
                        </Form.Select>
                        <div class="col-auto m-2">
                            <button type="submit" class="btn btn-primary mb-3" onClick={submit}>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default editbook
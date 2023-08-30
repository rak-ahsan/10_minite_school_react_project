import React from 'react'
import { Link } from 'react-router-dom'

const Button = (props) => {
    return (
        <div className="col-md-12 text-white d-flex justify-content-center" style={{ margin: "100px 0px" }}>
            <div className="link">
                <Link className="nav-link btn p-3" to={props.url} style={{ width: "200px", height: "50px", backgroundColor: "#198B46" }}> {props.btntext} </Link>
            </div>
        </div>
    )
}

export default Button
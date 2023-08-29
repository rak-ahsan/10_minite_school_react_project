import React from 'react'

const Button = (props) => {
    return (
        <div className="col-md-12 text-white d-flex justify-content-center" style={{ margin: "100px 0px" }}>
            <div className="link">
                <a className="nav-link btn p-3" style={{ width: "200px", height: "50px", backgroundColor: "#198B46" }}> {props.btntext} </a>
            </div>
        </div>
    )
}

export default Button
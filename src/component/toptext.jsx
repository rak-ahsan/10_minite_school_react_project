import React from 'react'

const toptext = (props) => {
    return (
        <div className="container mt-5" style={{ margin: "100px 0px" }}>
            <div className="first text-center">
                <p style={{ color: "#306BF4" }}><img src={props.img} alt="" style={{ width: "50px" }} className="m-2" />
                <b>{props.short}</b></p>
                <h1><b>{props.title}
                </b></h1>
                <p className='pt-3'>{props.sht}</p>
            </div>
        </div>
    )
}

export default toptext
import React from 'react'
import { Link } from 'react-router-dom'

const card = (props) => {
    return (
        <div className={`${props.className}`}>
            <Link  to={props.url} className="nav-link ">
                <div className="card mb-3 card-border">
                    <img src={props.img} alt="" className="img-fluid" />
                    <p className='p-3'>
                    {props.text}
                    </p>
                    <div className="card-body">
                        <h5 className="card-title mb-3">{props.title}</h5>

                        <p>{props.sub}</p>
                        <a href="#" className="btn">
                            <h3 style={{ color: "green" }}>{props.price}</h3>
                            <p>{props.bis}</p>
                        </a>
                        <p>{props.comment}</p>
                            <p>{props.occu}</p>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default card
import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';

const Tables = (props) => {
    return (
        <div className="container d-flex justify-content-center align-items-center">
            <div className="table-responsive col-md-12">
                <table className="table table-hover text-center">
                    <thead>
                        <tr>
                            <th scope="col">{props.t1}</th>
                            <th scope="col">{props.t2}</th>
                            <th scope="col">{props.t3}</th>
                            <th scope="col">{props.t4}</th>
                            <th scope="col">{props.t5}</th>
                            <th scope="col">{props.t7}</th>
                            <th scope="col">{props.t8}</th>
                            <th scope="col">{props.t9}</th>
                            <th scope="col">{props.t6}</th>
                            <th scope="col" colSpan="2">{props.t10}</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.name.length > 0 && (
                            props.name.map((item, index) => (
                                <tr key={index}>
                                    <td>{item[props.n1]}</td>
                                    <td>{item[props.n2]}</td>
                                    <td>{item[props.n3]}</td>
                                    <td>{item[props.n4]}</td>
                                    <td>{item[props.n5]}</td>
                                    <td>{item[props.n6]}</td>
                                    <td>{item[props.n7]}</td>
                                    <td>{item[props.n8]}</td>
                                    <td>{item[props.n9]}</td>
                                    <td>{item[props.n10]}</td>
                                    
                                    { props.con ==1 ?
                                        <td>
                                            <img src={`${props.path}/${item[props.imageName]}`} alt={item[props.imageName]} className="img-fluid" style={{ width: 50 }} />
                                        </td>
                                        : ""
                                    }
                                    <td>
                                        <Link to={`/${props.link}/${item[props.id]}`} className='btn btn-success mx-2'><FontAwesomeIcon icon={faPen} />
                                        </Link>


                                        <button className='btn btn-danger' onClick={(e) => props.dlt(e, item[props.id])}>
                                            <FontAwesomeIcon icon={faTrash} style={{ color: "#ffffff" }} />
                                        </button>

                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Tables;

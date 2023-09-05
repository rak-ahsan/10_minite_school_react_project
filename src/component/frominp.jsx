import React from 'react';

const Frominp = (props) => {
    return (
        // <div className="mb-3 col-md-6">
            
            <div className={` mb-3 ${props.className}`}>
            <label htmlFor="exampleFormControlInput1" className="form-label">{props.title}</label>
            <input
                type={props.type}
                className="form-control"
                placeholder={props.placeholder}
                name={props.name}
                onChange={props.onChange}
                value={props.value} 
            />
        </div>
    );
}

export default Frominp;

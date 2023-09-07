import React from 'react'
import Textview from './textview'

const test = () => {
    return (
        <>
            <div className="container">
                <Textview title="First Name" type="text" placeholder="rakib" className="col-md-6" />
                <Textview title="Last  Name" type="text" placeholder="Ahssan" className="col-md-6" />
                <Textview title="Last  Name" type="text" placeholder="Ahssan" className="col-md-6" />
                <Textview title="Last  Name" type="text" placeholder="Ahssan" className="col-md-6" />
                <Textview title="Last  Name" type="text" placeholder="Ahssan" className="col-md-6" />
            </div>

        </>
    )
}

export default test
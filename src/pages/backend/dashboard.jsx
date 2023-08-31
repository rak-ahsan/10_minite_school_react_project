import React from 'react'
import Sidebar from './sidebar'
import Header from '../../component/heback'

const dashboard = () => {
    return (
        <>
            <Header />
            <div className="container d-flex">
                <div className="col-md-3">
                    <Sidebar />
                </div>
                <div className="col-md-9">
                    
                </div>
            </div>

        </>
    )
}

export default dashboard
import React from 'react'

function Breadcroumb({name="home"}) {
    return (
        <div className="breadcroumb-area bread-bg">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="breadcroumb-title text-center">
                            <h1>{name}</h1>
                            <h6><a href="index.html">Home</a> / {name}</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Breadcroumb

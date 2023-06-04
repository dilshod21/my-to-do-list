import "./adding.css"
import { useState, } from 'react';

function Adding({}) {
    return (
        <div className="mt-5">
            <h5 className="d-flex align-items-center">
                <div className="icon-size mx-3">
                    <i className="bi bi-person-add"></i>
                </div>
                Adding new person!
            </h5>

            <div className="d-flex input-group">
                <input type="text" className="form-control"/>
                <button className="btn btn-primary">add</button>
            </div>
        </div>

    );
}

export default Adding;
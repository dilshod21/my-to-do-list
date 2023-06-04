import "./adding.css"
import { useState, } from 'react';

function Adding({ onAdder, }) {

    const [newMan, setNewMan] = useState("");

    const getValueFunc = (e) => {
        setNewMan(e.target.value);
    }


    const getName = (e) => {
        e.preventDefault();
        const newObj = {id: null, name: newMan, like: false, love: false};

        onAdder(newObj);
        setNewMan("");
    }

    return (
        <div className="mt-5">
            <h5 className="d-flex align-items-center">
                <div className="icon-size mx-3">
                    <i className="bi bi-person-add"></i>
                </div>
                Adding new person!
            </h5>

            <div>
                <form onSubmit={(e) => {getName(e)}} className="d-flex w-100 input-group">
                    <input
                        type="text"
                        className="form-control"
                        name="name" placeholder="  ...add new person"
                        value={newMan} onChange={(e) => {getValueFunc(e)}}
                    />
                    <button type="submit" className="btn btn-primary">add</button>
                </form>
            </div>
        </div>

    );
}

export default Adding;
import { useState, } from 'react';



function Searcher({ getFound, }) {

    const [found, setFound] = useState("");

    const getFoundSecond = (e) => {
        const found = e.target.value;
        setFound(found.toLowerCase());

        getFound(found);
    }

    return (
        <div className="row mt-3">
            <div className="col-xl-5 col-md-6 col-sm-8">
                <div className="input-group my-3">
                    <input
                        type="text"
                        placeholder="   searching..."
                        className="form-control"
                        onChange={getFoundSecond}
                        value={found}
                    />
                    <span className="input-group-text text-warning">
                        <i className="bi bi-search"></i>
                    </span>
                </div>
            </div>
            
        </div>
    );
}

export default Searcher;
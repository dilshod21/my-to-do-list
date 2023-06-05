import { useState, } from 'react';



function Searcher({ getFound, night, darkTheme }) {

    const [found, setFound] = useState("");

    const getFoundSecond = (e) => {
        const found = e.target.value;
        setFound(found.toLowerCase());

        getFound(found);
    }

    return (
        <div className="row mt-3">
            <div className="col-xl-6 col-lg-8 col-md-10 d-flex">
                <div className="input-group my-3">
                    <span className="btn input-group-text text-bg-primary">
                        <i className="bi bi-search"></i>
                    </span>
                    <input
                        type="text"
                        placeholder="   searching..."
                        className="form-control mx-1"
                        onChange={getFoundSecond}
                        value={found}
                    />
                    <button
                        className={`d-flex align-items-center btn ${night? "btn-warning": "btn-dark"}`}
                        onClick={darkTheme}
                    >
                        <span className="mx-2">
                            <i className={`bi ${night? "bi-brightness-high": "bi-moon"}`}></i>
                        </span>
                        {night? "day": "night"}
                    </button>
                </div>
            </div>
            
        </div>
    );
}

export default Searcher;
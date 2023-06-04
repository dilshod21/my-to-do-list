import { useState, } from 'react';
import "./App.css"




function App() {

    const [persons, setPersons] = useState([
        {id: 1, name: "Otabek", like: false, love: false},
        {id: 2, name: "Yusuf", like: false, love: false},
        {id: 3, name: "Sunnat", like: false, love: false},
        {id: 4, name: "Dilshod", like: false, love: false}
    ]);


    return (
        <div className="container">
            <div className="row">
                <div className="col-xl-6 col-lg-8 col-md-10">
                    <table className="table table-striped">
                        <List persons={persons} />
                    </table>
                </div>
            </div>
        </div>
    );
}

export default App;
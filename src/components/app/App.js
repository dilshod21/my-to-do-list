import { useState, } from 'react';
import "./App.css"
import List from "../llist/List";



function App() {

    const [persons, setPersons] = useState([
        {id: 1, img: img1, name: "Otabek", like: false, love: false},
        {id: 2, img: img2, name: "Yusuf", like: false, love: false},
        {id: 3, img: img3, name: "Sunnat", like: false, love: false},
        {id: 4, img: img4, name: "Dilshod", like: false, love: false}
    ]);

    const [found, setFound] = useState("")

    const onDelete = (id) => {
        const newArr = persons.filter(c => c.id !== id);

        setPersons(newArr);

        console.log(persons)
    };

    const onLike = (id) => {
        const newArr = persons.map(item => {
            if (item.id === id){
                return{...item, like: !item.like}
            }
            return item;
        })

        return setPersons(newArr)

    }

    const onLove = (id) => {
        const newArr = persons.map(item => {
            if (item.id === id){
                return{...item, love: !item.love}
            }
            return item;
        })

        return setPersons(newArr)
    }

    const searching = (arr, found) => {
        if (found.length === 0){
            return arr;
        }

        return arr.filter(item => item.name.toLowerCase().indexOf(found) > -1);
    };

    const getFound = (found) => setFound(found);
    return (
        <div className="container">
            <Searcher getFound={getFound} />
            <div className="row">
                <div className="col-xl-6 col-lg-8 col-md-10">
                    <table className="table table-striped">
                        <List persons={searching(persons, found)} onDelete={onDelete} onLike={onLike} onLove={onLove} />
                    </table>
                </div>
            </div>
        </div>
    );
}

export default App;
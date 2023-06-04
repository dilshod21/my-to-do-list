import { useState, } from 'react';
import { v4 as uuidv4 } from 'uuid';
import "./App.css"
import List from "../llist/List";
import Searcher from "../search-part/searcher";
import Adding from "../adding-part/Adding";
import FilterComp from "../filter/Filter";


function App() {

    const [persons, setPersons] = useState([
        {id: 1, name: "Otabek", like: false, love: false},
        {id: 2, name: "Yusuf", like: false, love: false},
        {id: 3, name: "Sunnat", like: false, love: false},
        {id: 4, name: "Dilshod", like: false, love: false}
    ]);

    const [found, setFound] = useState("");
    const [filter, setFilter] = useState("all");


    const allQuantity = persons.length;
    const likeQuantity = persons.filter(c => c.like).length;
    const loveQuantity = persons.filter(c => c.love).length;

    const onDelete = (id) => {
        const newArr = persons.filter(c => c.id !== id);

        setPersons(newArr);
    };

    const onLike = (id) => {
        const newArr = persons.map(item => {
            if (item.id === id){
                return{...item, like: !item.like}
            }
            return item;
        })

        return setPersons(newArr)

    };

    const onLove = (id) => {
        const newArr = persons.map(item => {
            if (item.id === id){
                return{...item, love: !item.love}
            }
            return item;
        })

        return setPersons(newArr);
    };

    const searching = (arr, found) => {
        if (found.length === 0){
            return arr;
        }

        return arr.filter(item => item.name.toLowerCase().indexOf(found) > -1);
    };



    const onAdder = (newPerson) => {

        const newAdder = [...persons , { ...newPerson, id: uuidv4()}];
        setPersons(newAdder);
    };

    const filtering = (filterName) => {
        setFilter(filterName);
    };

    const doingFilter = (arr, filter) => {
        switch (filter) {
            case "love":
                return arr.filter(c => c.love)
            case "like":
                return arr.filter(c => c.like)
            default:
                return arr

        }
    }



    const getFound = found => setFound(found);

    return (
        <div className="container">
            <Searcher getFound={getFound} />
            <div className="row">
                <div className="col-xl-6 col-lg-8 col-md-10">
                    <FilterComp
                        filtering={filtering}
                        filter={filter}
                        allQuantity={allQuantity}
                        likeQuantity={likeQuantity}
                        loveQuantity={loveQuantity}
                    />
                    <table className="table table-striped mt-3">
                        <List persons={doingFilter(searching(persons, found), filter)} onDelete={onDelete} onLike={onLike} onLove={onLove} />
                    </table>
                    <Adding onAdder={onAdder} />
                </div>
            </div>
        </div>
    );
}

export default App;
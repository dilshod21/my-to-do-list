import ListItem from "../list-item/ListItem";

function List({ persons, onDelete, onLike, onLove }) {

    return (
        <tbody>
            {persons.map((item, index) => (
                <ListItem
                    id={item.id}
                    number={index}
                    name={item.name}
                    like={item.like}
                    love={item.love}
                    onLike={() => {onLike(item.id)}}
                    onLove={() => {onLove(item.id)}}
                    onDelete={() => {onDelete(item.id)}}
                />
                ))}
        </tbody>
    );
}

export default List;
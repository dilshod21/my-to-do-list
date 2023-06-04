



function ListItem({ id, number, name, like, love, onDelete, onLike, onLove }) {

    return (
        <tr key={id}>
            <td>

                <div className="d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center">
                        <p>{number + 1}</p>

                        <p className="mx-2">{name}</p>
                    </div>

                    <div className="d-flex align-items-center">
                        <button className="btn btn-sm btn-danger" onClick={onLove}>
                            <i className={love? "bi bi-heart-fill": "bi bi-heart"}></i>
                        </button>
                        <span className="mx-2">{love? 1: 0}</span>
                        <button className="btn btn-sm btn-primary" onClick={onLike}>
                            <i className={like? "bi bi-star-fill": "bi bi-star"}></i>
                        </button>
                        <span className="mx-2">{like? 1: 0}</span>
                        <button
                            className="btn btn-sm btn-danger mx-2"
                            onClick={onDelete}>
                            delete
                            <span className="mx-2">
                            <i className="bi bi-trash"></i>
                        </span>
                        </button>
                    </div>
                </div>

            </td>
        </tr>
    );
}

export default ListItem;

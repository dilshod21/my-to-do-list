
function FilterComp({ filtering, filter, allQuantity, likeQuantity, loveQuantity }) {

    const btnArr = [
        {name: "all", label: "barchasi", quantity: allQuantity, icon: "bi bi-list-ol"},
        {name: "love", label: "like-bosilgan", quantity: loveQuantity, icon: "bi bi-heart-fill"},
        {name: "like", label: "yulduz-bosilgan", quantity: likeQuantity, icon: "bi bi-star-fill"}
    ]


    return (
        <div className="d-flex justify-content-center">
            <div className="btn-group mx-auto">
                {
                    btnArr.map(item => (
                        <button
                            className={`btn ${item.name == filter? "btn-primary": "btn-outline-primary"} btn-sm`}
                            onClick={() => {filtering(item.name)}}>

                            <i className={item.icon}></i>

                            <span className="mx-2">
                            {item.label}
                        </span>

                            <span className="badge text-bg-primary">{item.quantity}</span>

                        </button>
                    ))
                }
            </div>
        </div>
    );
}

export default FilterComp;
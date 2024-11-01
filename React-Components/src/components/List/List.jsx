import './List.css'
// import PropTypes from 'prop-types'
export default function List(props) {

    const category = props.category;
    const itemList = props.items;


    const listItems = itemList.map((item) => <li key={item.id}>{item.name}: &nbsp;
        <b>{item.calories}</b></li>)
    return (
        <>
            <h3 className="list-category">{category}</h3>
            <ol className="list-items">{listItems}</ol>

        </>
    );
}

// List.propTypes = {
//     category: PropTypes.string,
//     items: PropTypes.arrayOf(PropTypes.shape({id: PropTypes.number, name: propTypes.string, calories: PropTypes.number})),
// }
List.defaultProps = {
    category: "Category",
    items: [],
}
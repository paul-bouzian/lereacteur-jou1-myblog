/* eslint-disable react/prop-types */
import "./Item.css";

const Item = ({ item }) => {
  return (
    <div className="item">
      <h2>{item.title}</h2>
      <p>{item.description}</p>
      <div className="grey-square"></div>
      <p>{item.content}</p>
    </div>
  );
};

export default Item;

import React from "react";
import { TiDeleteOutline } from "react-icons/ti";
import { RiEditLine } from "react-icons/ri";
const List = ({ items, removeItem, editItem }) => {
  return (
    <div className="grocery-list">
      {items.map((item) => {
        const { id, title } = item;
        return (
          <article className="grocery-item" key={id}>
            <p className="title">{title}</p>
            <div className="btn-container">
              <button
                type="button"
                className="edit-btn"
                onClick={() => editItem(id)}
              >
                <RiEditLine size={20} />
              </button>
              <button
                type="button"
                className="delete-btn"
                onClick={() => removeItem(id)}
              >
                <TiDeleteOutline size={20} />
              </button>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default List;

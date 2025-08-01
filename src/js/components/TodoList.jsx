import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";

function TodoList() {
  const [items, setItems] = useState(["Make to bed", "Wash my hands"]);

  function handleDelete(index) {
    const fil = index;
    const itemsFilter = items.filter((element, index)=>{
        return index != fil
    });
    setItems(itemsFilter)
  }

  return (
    <div className="d-block">
      <h1 className="mx-auto title">Todos</h1>
      <ul className="list-group list-group-flush border mx-auto todo-list" style={{width:'40%'}}>
        <li className="list-group-item">
          <input
            className="border-0 w-100"
            type="text"
            onKeyDown={(e) =>
              e.key === "Enter" && setItems([...items, e.target.value])
            }
          />
        </li>
        {items.map((value, index) => {
          return (
            <li
              key={index}
              className="list-group-item d-flex justify-content-between"
            >
              {value}{" "}
              {
                <FontAwesomeIcon
                  onClick={() => {
                    handleDelete(index);
                  }}
                  style={{ color: "red" }}
                  icon={faX}
                />
              }
            </li>
          );
        })}
        <a href="#" class="list-group-item list-group-item-light">{items.length} item left</a>
      </ul>
    </div>
  );
}

export default TodoList;

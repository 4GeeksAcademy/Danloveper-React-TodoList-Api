import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";

function TodoList() {
  const [items, setItems] = useState([]);
  const baseUrl = 'https://playground.4geeks.com/todo'

  const getTodos = async ()=> {
    const response = await fetch(`${baseUrl}/users/danloveper`);
    if (!response.ok){
      error => console.log(error)
    }
    const todos = await response.json();
    setItems(todos.todos);
  }

  const posTodo = async (value)=>{
    const todo = {
      'label': value,
      'is_done': false
    }
    const response = await fetch(`${baseUrl}/todos/danloveper`,
      {
        method: 'POST',
        body: JSON.stringify(todo),
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
    if (!response.ok) throw console.error(response);
    const newTodo = await response.json();
    setItems([...items,newTodo])
    return newTodo
  }

  const deletePost = async (postId)=> {
    const reponse = await fetch(`${baseUrl}/todos/${postId}`,{
      method:'DELETE'
    })
    getTodos();
    return reponse
  }

  useEffect(()=>{
    getTodos();
  }, []);

  return (
    <div className="d-block">
      <h1 className="mx-auto title">Todos</h1>
      <ul className="list-group list-group-flush border mx-auto todo-list" style={{width:'40%'}}>
        <li className="list-group-item">
          <input
            className="border-0 w-100"
            type="text"
            onKeyDown={(e) =>
              e.key === "Enter" && posTodo(e.target.value)
            }
          />
        </li>
        {items.map((post) => {
          return (
            <li
              key={post.id}
              className="list-group-item d-flex justify-content-between"
            >
              {post.label}{" "}
              {
                <FontAwesomeIcon
                  onClick={() => {
                    deletePost(post.id);
                  }}
                  style={{ color: "red" }}
                  icon={faX}
                />
              }
            </li>
          );
        })}
        <a href="#" className="list-group-item list-group-item-light">{items.length} item left</a>
      </ul>
    </div>
  );
}

export default TodoList;

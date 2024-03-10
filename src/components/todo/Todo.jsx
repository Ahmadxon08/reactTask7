/* eslint-disable react/jsx-no-undef */
import { useEffect, useState } from "react";
import "./Todo.scss";
import { Link, useParams } from "react-router-dom";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    const fetchTodo = async () => {
      try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/todos`);
        const data = await res?.json();
        setTodos(data);
      } catch (error) {
        console.log("Xatolik bor !!!!", error);
      }
    };
    fetchTodo();
  });
  return (
    <>
      <div className="todo">
        <div className="container">
          <div className="todo_head">
            <Link to={"/"}>
              <button>go back</button>
            </Link>
            <h1>Todos info</h1>
          </div>
          <div className="todo_content">
            <div className="todo_card">
              {todos?.map((todo) => {
                if (todo?.userId == id) {
                  return (
                    <div className="todo_card_item" key={todo.id}>
                      <div className="name">
                        <span>{todo.id}th user</span>
                        <h3>{todo.title}</h3>
                      </div>
                      <p className="p">{todo.completed ? "✅" : "❌"}</p>
                    </div>
                  );
                }
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;

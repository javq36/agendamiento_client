import { useState } from "react";
import { useGetTodoIDQuery, useGetTodosQuery } from "../store/apis";
import Container from "@mui/material/Container";

export const Listado = () => {
  const { data: todos = [] } = useGetTodosQuery();

  const [todoId, settodoId] = useState(1);
  const { data: todo = 1 } = useGetTodoIDQuery(todoId);

  const nextTodo = () => {
    settodoId(todoId + 1);
  };
  const prevTodo = () => {
    if (todoId > 1) {
      settodoId(todoId - 1);
    }
  };
  return (
    <Container maxWidth="md" sx={{backgroundColor: 'white', padding: 4, marginBottom: 4}}>
      
      <h1>RTK QUERY</h1>
      <nav className="nav navbar align-items-center">
        <button className="btn btn-danger" onClick={prevTodo}>
          Prev Todo
        </button>
        <button className="btn btn-success" onClick={nextTodo}>
          Next Todo
        </button>
      </nav>
      <hr />

      <table className="table text-right">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Title</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td
              className="bg-light text-dark text-center"
              style={{ width: "100px" }}
            >
              {todo.id}
            </td>
            <td className="bg-light">{todo.title}</td>
          </tr>
        </tbody>
      </table>
      <hr />
      <table className="table text-right">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Title</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) => (
            <tr key={todo.id}>
              {todo.id === todoId && (
                <>
                  <td className="bg-danger text-white text-center" sx={{backgroundColor:'red' , color: 'white'}}>
                    {todo.id}
                  </td>
                  <td className="bg-light">{todo.title}</td>
                </>
              )}
              {todo.id != todoId && (
                <>
                  <td className="text-center">{todo.id}</td>
                  <td>{todo.title}</td>
                </>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
};

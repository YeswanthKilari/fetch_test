
import axios from 'axios';
export default async function Home() {

  const response = await axios.get('https://dummyjson.com/todos')
  const todos = response.data.todos;
//  console.log(todos);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen ">
      <h1 className="text-2xl font-bold mb-4">Todo List</h1>
      <ul className="list-disc">
        {todos.map((todo: { id: number; todo: string }) => (
          <li
            key={todo.id}
            className={todo.id % 2 === 0 ? "text-blue-500" : "text-red-500"}
          >
            {todo.todo}
          </li>
        ))}
      </ul>
    </div>
  );
}

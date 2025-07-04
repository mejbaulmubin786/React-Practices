import React, { useEffect, useState } from 'react';

const App = () => {
  // 1️⃣ ফেচ-কৃত আইটেম রাখার স্টেট
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(res => res.json())      // 2️⃣ JSON-এ রূপান্তর
      .then(data => setTodos(data)) // 3️⃣ স্টেটে ভরুন
      .catch(err => console.error(err)); // (ঐচ্ছিক) ত্রুটি ধরুন
  }, []);                           // 4️⃣ খালি অ্যারে => শুধু একবার চলবে

  console.log(todos);               // এখন নিরাপদে লগ করা যাবে

  return (
    <div>
      <h3>Todo List (first 10)</h3>
      <ul>
        {todos.slice(0, 10).map(todo => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;

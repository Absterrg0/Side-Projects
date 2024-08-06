"use client"
import { useEffect, useState } from 'react';
import axios from 'axios';
import TodoInfo from './card';
import CardValue from './maincard';

interface Todo {
  id: number;
  title: string;
  description: string;
  completed: boolean; // Ensure this matches your Prisma schema
}

export default function Alltodos() {
  const [todos, setTodos] = useState<Todo[]>([]);
  
  // Fetch todos from the server when the component mounts
  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await axios.get('/api/todos');
        setTodos(response.data);
      } catch (error) {
        console.error('Error fetching todos:', error);
      }
    };

    fetchTodos();

    // Optionally, set up a WebSocket or other mechanism to listen for changes
    // This is just a placeholder if you want real-time updates
    const interval = setInterval(fetchTodos, 1000); // Poll every 5 seconds

    return () => clearInterval(interval); // Clean up the interval on unmount
  }, []);

  const handleComplete = async (id: number) => {
    try {
      await axios.put(`/api/todos/${id}`, { completed: true });
      setTodos(todos.map(todo =>
        todo.id === id ? { ...todo, completed: true } : todo
      ));
    } catch (error) {
      console.error('Error updating todo status:', error);
    }
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {todos.map(todo => (
        <CardValue 
        key={todo.id} 
        id={todo.id}
        title={todo.title} 
        description={todo.description} 
        completed={todo.completed} 
        onComplete={handleComplete}
        />
      ))}
    </div>
  );
}

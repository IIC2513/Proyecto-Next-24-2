"use client"

import React, {useState} from "react";
import TodoList from "@/components/TodoList";
import AddTodo from "@/components/AddTodo";
import Modal from "@/components/Modal";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

const Home: React.FC = () => {
    const [todos, setTodos] = React.useState<Todo[]>([]);
    const [showModal, setShowModal] = React.useState<boolean>(false);
    const [message, setMessage] = React.useState<string>('');

    const addTodo = (text: string) => {
        setTodos([... todos, {id: Date.now(), text, completed: false}]);
    }

    const toggleComplete = (id: number) => {
        setTodos(
            todos.map(todo => 
                todo.id == id ? {...todo, completed: !todo.completed} : todo
            )
        )

        const completedTodo = todos.find(todo => todo.id === id);
        if (completedTodo) {
            setMessage(`Todo ${completedTodo.text} is ${completedTodo.completed ? 'completed' : 'not completed'}`);
            setShowModal(true);
        }
    };

    const closeModal = () => {
        setShowModal(false);
    }

    return(
        <div style={{display: 'flex', flexDirection: 'column'}}>
            <h1>My Lista Todos</h1>
            <AddTodo addTodo={addTodo} />
            <div>
            <TodoList todos={todos} onToggle={toggleComplete} />
            <Modal show={showModal} onClose={closeModal} message={message} />
            </div>
        </div>
    )
};

export default Home;
"use client"

import React from 'react';
import { useState } from 'react';

interface AddTodoProps {
    addTodo: (text: string) => void;
}

const AddTodo: React.FC<AddTodoProps> = ({ addTodo }) => {
    const [text, setText] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!text.trim()) return;
        addTodo(text);
        setText('');
    };


    return (
        <ul>
            <form onSubmit={handleSubmit}>
                <input 
                type="text" 
                value={text} 
                onChange={e => setText(e.target.value)}
                placeholder='Enter todo task'/>
                <button type='submit'>Add</button>
            </form>
        </ul>
    );
    }

export default AddTodo;
import { useState } from 'react';

export default function AddTask({onAdd}) {
    const [newTaskText, setNewTaskText] = useState('');

    const handleTextChange = (e) => {
        const newText = e.target.value;
        setNewTaskText(newText);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        onAdd(newTaskText.trim());
        setNewTaskText('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type='text' value={newTaskText} onChange={handleTextChange} placeholder='Insert new task' />
            <input type='submit' disabled={newTaskText.trim().length === 0} value={'Add'} />
        </form>
    );
}

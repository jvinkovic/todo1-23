import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';

const TaskItem = ({task, onDelete, onDone}) => {
    return (
        <p>
            <input type='checkbox' checked={task.done} onChange={onDone} />
            <span style={task.done ? {textDecoration: 'line-through'} : {}}>{task.title}</span>
            <Button size='sm' onClick={onDelete} variant="outline-danger">X</Button>
        </p>);
}

export default TaskItem;

TaskItem.propTypes = {
    task: PropTypes.object.isRequired,
    onDelete: PropTypes.func,
    onDone: PropTypes.func
}

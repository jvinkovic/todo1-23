import React from 'react';
import TaskItem from './TaskItem';
import PropTypes from 'prop-types';

export default class TaskList extends React.Component {
    render(){
        return (<div>
            {this.props.tasks.map((t) => <TaskItem key={t.number} task={t} 
                                                        onDelete={() => this.props.onDelete(t.number)} 
                                                        onDone={() => this.props.onDone(t.number)} />)}
        </div>);
    }
}

TaskList.propTypes = {
    tasks: PropTypes.array,
    onDelete: PropTypes.func,
    onDone: PropTypes.func
}

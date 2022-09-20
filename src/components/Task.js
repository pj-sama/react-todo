import React from 'react';

//fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const Task = ({ task, onDelete, onToggle }) => {
	return (
		<div
			className={`task ${task.reminder && 'reminder'}`}
			onDoubleClick={() => onToggle(task.id)}
		>
			<h3>
				{task.text}
				<FontAwesomeIcon
					icon={faTimes}
					onClick={() => onDelete(task.id)}
				/>
			</h3>
			<p>{task.day}</p>
		</div>
	);
};

export default Task;

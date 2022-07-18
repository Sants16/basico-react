import React from 'react';
import { useParams, Link } from 'react-router-dom';

import Button from './Button';
import './TaskDetails.css';

const TaskDetails = () => {
    const params = useParams();

    return ( 
        <>
            <div className='.back-button-container'>
                <Link to='/'><Button>Voltar</Button></Link>
            </div>
            <div className="task-details-container">
                <h2>{params.taskTitle}</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim ipsam porro maiores placeat totam tempore optio nostrum reiciendis sequi! Neque assumenda quas rem quo fugiat aut enim saepe accusamus. Velit!
                </p>
            </div>
        </>
     );
}
 
export default TaskDetails;
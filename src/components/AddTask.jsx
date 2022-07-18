import React, { useState } from 'react';
import './AddTask.css'
import Button from './Button';
const AddTask = ({handleTaskAddition}) => {

    const[inputData, setInputData] = useState('')

    const handleInputChange = (e) => {
        setInputData(e.target.value) //sempre que o valor padrão de ssetInputData for mudado o componente renderiza novamente
    }

    const handleAddTaskClick = () =>{
        handleTaskAddition(inputData)
        setInputData('')
    }

    return ( 
        <div className='add-task-container'>
            <input  onChange={handleInputChange} value={inputData}  className='add-task-input' type="text" />
            <div className="add-task-button-container">
                <Button função={handleAddTaskClick}>Adicionar</Button>
            </div>
            
        </div>
     );
}
 
export default AddTask;
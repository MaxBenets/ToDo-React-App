import s from "./Todo.module.css";

import Form from "./Form/Form";
import Output from "./Output/Ouput";

    const Todo = (props) => {
        return(
        <div className={s.todo}>
            <header className={s.header}>
                <h1 className={s.h1}>Todo List</h1>
            </header>
            <Output
                output_data = {props.output_data}
                removeTask = {props.removeTask}
                completeTask = {props.completeTask}
            />

            <Form
                inputValue = {props.inputValue}
                timeValue = {props.timeValue}  
                setInputValue = {props.setInputValue}
                setTimeValue = {props.setTimeValue}
                addTask = {props.addTask}
            />

        </div>
    )
}

export default Todo
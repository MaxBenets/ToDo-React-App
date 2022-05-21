import Todo from "./Todo";

import {connect} from "react-redux"

import {removeTask, completeTask, setInputValue, setTimeValue, addTask} from "../../redux/reducers/todo_reducer";

const mapStateToProps = (state) => {
    return {
        inputValue: state.todo.inputValue,
        timeValue: state.todo.timeValue,
        output_data: state.todo.output_data
    }
}

let mapDispatchToProps = {
    removeTask,
    completeTask,
    setInputValue,
    setTimeValue,
    addTask
}

const TodoContainer = connect(mapStateToProps, mapDispatchToProps)(Todo)

export default TodoContainer
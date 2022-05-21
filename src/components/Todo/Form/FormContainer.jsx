import Form from "./Form";
import {connect} from "react-redux"

import { setInputValue, setTimeValue, addTask } from "../../../redux/reducers/form_reducer"

const mapStateToProps = (state) => {
    return {
        inputValue: state.todo.inputValue,
        timeValue: state.todo.timeValue,
    }
}

let mapDispatchToProps = {
    setInputValue,
    setTimeValue,
    addTask
}

const FormContainer = connect(mapStateToProps, mapDispatchToProps)(Form)

export default FormContainer
import React from "react";
import s from "./Form.module.css";

const Form = (props) => {

    let inputRef = React.createRef()
    let timeRef = React.createRef()

    const setText = () => {
        props.setInputValue(inputRef.current.value)
    }
    const setTime = () => {
        props.setTimeValue(timeRef.current.value)
    }

    const addTask = () => {
        props.addTask()
    }

    return (
        <div className={s.form}>
            <input placeholder="New task" ref = {inputRef} onChange={setText} value = {props.inputValue} className={s.addTask} type="text" />
            <input ref = {timeRef} onChange={setTime} value={props.timeValue} type = "time" onClick={() => {}} className={s.add_time} />
            <button type = "button" onClick={addTask} className={s.add}>➕</button>
        </div>
    )
}

export default Form
import React from "react";
import s from "./Output.module.css";

const Output = (props) => {

    let li_ref = React.createRef()

    let output_data = props.output_data.map(data => {
        if (data.hidden !== true){
            return <li key = {data.id} ref = {li_ref} className={data.complete ? s.li_active: s.li}>
                <div className={s.content}>{data.text}</div>

                <div className={s.time}>{data.time}</div>
                <div onClick = {() => {props.completeTask(data.id)}} className={s.collect}>✓</div>
                <div onClick = {() => {props.removeTask(data.id)}} className={s.remove}>✖</div>
            </li>
        }
    })

    return (
        <div className={s.output}>
            <ul className={s.tasks}>
                {output_data}
            </ul>
        </div>
    )
}

export default Output
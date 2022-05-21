const REMOVE_TASK = "REMOVE-TASK"
const COMPLETE_TASK = "COMPLETE-TASK"
const ADD_TASK = "ADD-TASK"
const SET_TIME_VALUE = "SET-TIME-VALUE"
const SET_INPUT_VALUE = "SET-INPUT-VALUE"

const date = new Date()

let initial_state = {
    output_data: [],
    inputValue: "",
    timeValue: date.getHours()+":"+date.getMinutes()
}

export let todo_reducer = (state = initial_state, action) => {
    switch (action.type){

        case REMOVE_TASK:
            return{
                ...state,
                output_data: state.output_data.map((op) => {
                    if (op.id == action.id){
                        return{
                            ...op,
                            hidden: true
                        }
                    }
                    return op
                })
            }
        case COMPLETE_TASK:
            return{
                ...state,
                output_data: state.output_data.map((op) => {
                    if (op.id == action.id){
                        return{
                            ...op,
                            complete: true
                        }
                    }
                    return op
                })
            }
            case SET_INPUT_VALUE:
                return{
                    ...state,
                    inputValue: action.newval
                }
            case SET_TIME_VALUE:
                return{
                    ...state,
                    timeValue: action.value
                }
            case ADD_TASK:
                let task = {
                    id: state.output_data.length,
                    hidden: false,
                    complete: false,
                    text: state.inputValue,
                    time: state.timeValue
                }
    
                if (state.inputValue.length > 0){
                    return{
                        ...state,
                        inputValue: "",
                        output_data: [...state.output_data, task]
                    }
                }
                else{
                    return{
                        ...state,
                    }
                }

        default:
            return state
    }
}

export let removeTask = (id) => {
    return{
        type: REMOVE_TASK,
        id: id
    }
}
export let completeTask = (id) => {
    return {
        type: COMPLETE_TASK,
        id: id
    }
}
export let setInputValue = (newval) => {
    return{
        type: SET_INPUT_VALUE,
        newval: newval
    }
}

export let setTimeValue = (value) => {
    return{
        type: SET_TIME_VALUE,
        value: value
    }
}

export let addTask = () => {
    return{
        type: ADD_TASK
    }
}
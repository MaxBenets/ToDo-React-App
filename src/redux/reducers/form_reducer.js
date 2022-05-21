const ADD_TASK = "ADD-TASK"
const SET_TIME_VALUE = "SET-TIME-VALUE"
const SET_INPUT_VALUE = "SET-INPUT-VALUE"

const date = new Date()

let initial_state = {
    output_data: [],
    inputValue: "",
    timeValue: date.getHours()+":"+date.getMinutes()
}

export let form_reducer = (state = initial_state, action) => {
    switch (action.type){
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
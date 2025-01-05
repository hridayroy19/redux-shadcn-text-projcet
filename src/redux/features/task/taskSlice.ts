import { RootState } from './../../store';
import { ITask } from "@/type";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';

interface InitialState {
    tasks: ITask[];
    filter: "all" | "high" | "medium" | "low"


}

const initialState: InitialState = {
    tasks: [],
    filter: "all"
}

export const taskSlice = createSlice({
    name: "task",
    initialState,
    reducers: {
        addTask: (state, action: PayloadAction<ITask>) => {

            const id = uuidv4();
            const taskData = {
                ...action.payload,
                id,
                isCompleted: false
            }
            state.tasks.push(taskData)
        },
        toggleState: (state, action: PayloadAction<string>) => {
            state.tasks.forEach((task) => task.id == action.payload ? (task.isCompleted = !task.isCompleted) : task)
        },
        deletTask: (state, action: PayloadAction<string>) => {
            state.tasks = state.tasks.filter((task) => task.id !== action.payload)
        },
        updateFilter: (state, action: PayloadAction< "high" | "medium" | "low">) => {
            state.filter = action.payload
        }
    }
})


export const selectTask = (state: RootState) => {

    const filter = state.todo.filter
    if (filter == "low") {
        return state.todo.tasks.filter((task) => task.priority == "low")
    } else if (filter == "medium") {
        return state.todo.tasks.filter((task) => task.priority == "medium")
    }
    else if (filter == "high") {
        return state.todo.tasks.filter((task) => task.priority == "high")
    } else {
        return state.todo.tasks
    }


}



export const { addTask, toggleState, deletTask, updateFilter } = taskSlice.actions

export default taskSlice.reducer
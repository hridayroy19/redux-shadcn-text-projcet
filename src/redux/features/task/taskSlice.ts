import { RootState } from './../../store';
import { ITask } from "@/type";
import { createSlice } from "@reduxjs/toolkit";



interface InitialState {
    tasks: ITask[];
}

const initialState: InitialState = {
    tasks: [
        {
            id: "1245",
            title: "initial fonend",
            description: "crat hole page routing",
            dueDate: "2025-10-05",
            isCompleted: false,
            priority: "High"
        },
        {
            id: "12222",
            title: "initial Backend",
            description: "crat hole page routing",
            dueDate: "2026-10-05",
            isCompleted: false,
            priority: "Medium"
        }
        
    ]
}

export const taskSlice = createSlice({
    name: "task",
    initialState,
    reducers: {}
})


export const selectTask = (state:RootState) =>{
    return state.todo.tasks
}

export default taskSlice.reducer
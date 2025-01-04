import { ITask } from "@/type";
import { createSlice } from "@reduxjs/toolkit";


interface InitialState {
    task: ITask[];
}

const initialState: InitialState = {
    task: [
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
        },
        {
            id: "144444",
            title: "initial projcet",
            description: "crat hole page routing",
            dueDate: "2026-10-05",
            isCompleted: false,
            priority: "Low"
        }
    ]
}

export const taskSlice = createSlice({
    name: "task",
    initialState,
    reducers: {}
})


export default taskSlice.reducer
import { RootState } from './../../store';
import { ITask } from "@/type";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';

interface InitialState {
    tasks: ITask[];
}

const initialState: InitialState = {
    tasks: []
}

export const taskSlice = createSlice({
    name: "task",
    initialState,
    reducers: {
        addTask :(state, action:PayloadAction<ITask>) =>{

         const id = uuidv4();
         const taskData  = {
            ...action.payload,
            id,
            isCompleted:false
         }
            state.tasks.push(taskData)
        },
        toggleState:(state , action:PayloadAction<string> ) =>{
          
            state.tasks.forEach((task)=> task.id == action.payload ? (task.isCompleted = ! task.isCompleted):task)
        },
        deletTask: (state , action:PayloadAction<string>)=>{
            state.tasks = state.tasks.filter((task)=> task.id !== action.payload)
        }
    }
})


export const selectTask = (state:RootState) =>{
    return state.todo.tasks
}

export const {addTask,toggleState, deletTask } = taskSlice.actions

export default taskSlice.reducer
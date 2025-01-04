import { AddButton } from "@/component/tasksComponents/addButton";
import TaskCard from "@/component/tasksComponents/taskCard";
import { selectTask } from "@/redux/features/task/taskSlice";
import { useAppSelector } from "@/redux/hook";

const Task = () => {
    const tasks = useAppSelector(selectTask)
    return (
    <>
        
        <div className=" w-[450px] mx-auto mt-9 ">
        <div className="  mt-10 mb-4 flex items-center justify-between">
        <h1 className="  text-2xl text-green-500 font-serif cursor-text"> Task </h1>
        <AddButton/>
        </div>
            {
                tasks?.map((task)=>(
                    <TaskCard task={task} key={task?.id}/>
                ))
            }
        </div></>
    );
};

export default Task;
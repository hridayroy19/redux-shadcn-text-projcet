import { AddButton } from "@/component/tasksComponents/addButton";
import TaskCard from "@/component/tasksComponents/taskCard";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { selectTask, updateFilter } from "@/redux/features/task/taskSlice";
import { useAppSelector } from "@/redux/hook";
import { useDispatch } from "react-redux";

const Task = () => {
    const tasks = useAppSelector(selectTask)
    const dispatch = useDispatch()



    return (
    <>
        
        <div className=" w-[750px] mx-auto mt-9 ">
        <div className="  mt-10 mb-10 flex items-center gap-4 justify-end">
        <h1 className="  text-2xl mr-auto text-green-500 font-serif cursor-text"> Task </h1>
     <Tabs defaultValue="all">
     <TabsList className="grid w-full grid-cols-4">
        <TabsTrigger onClick={()=> dispatch(updateFilter("all"))} value="all">All</TabsTrigger>
        <TabsTrigger onClick={()=> dispatch(updateFilter("low"))} value="low">Low</TabsTrigger>
        <TabsTrigger onClick={()=> dispatch(updateFilter("medium"))} value="medium">Medium</TabsTrigger>
        <TabsTrigger onClick={()=> dispatch(updateFilter("high"))} value="high">High</TabsTrigger>
      </TabsList>
     </Tabs>
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
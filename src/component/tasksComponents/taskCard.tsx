import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";
import { deletTask, toggleState } from "@/redux/features/task/taskSlice";
import { useAppDispatch } from "@/redux/hook";
import { ITask } from "@/type";
import { Trash2 } from "lucide-react";

interface Iprops {
    task:ITask
}

const TaskCard = ({task}:Iprops) => {
const dispatch = useAppDispatch()
  return (
    <div className=" border px-5 py-3 rounded-md">
      <div className="flex justify-between items-center">
        <div className=" flex gap-3 items-center">
          <div className= {cn(" size-3 rounded-full",{
            "bg-red-500":task.priority === "low",
            "bg-orange-500":task.priority === "medium",
            "bg-blue-500":task.priority === "high"

          })}></div>
          <h1 className={cn({"line-through":task.isCompleted})}> {task?.title}</h1>
        </div>
        <div className=" flex gap-3 items-center">
            <button className=" p-0 text-red-600">
        <Trash2 onClick={()=>dispatch(deletTask(task.id))} />
            </button>
            <Checkbox checked={task.isCompleted} onClick={()=>dispatch(toggleState(task.id))}/>
        </div>
      </div>
      <h3 className=" mt-4"> {task.description} </h3>
    </div>
  );
};

export default TaskCard;

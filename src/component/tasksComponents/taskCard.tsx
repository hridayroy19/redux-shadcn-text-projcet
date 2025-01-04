import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";
import { ITask } from "@/type";
import { Trash2 } from "lucide-react";

interface Iprops {
    task:ITask
}

const TaskCard = ({task}:Iprops) => {
  return (
    <div className=" border px-5 py-3 rounded-md">
      <div className="flex justify-between items-center">
        <div className=" flex gap-3 items-center">
          <div className= {cn(" size-3 rounded-full",{
            "bg-green-500":task.priority === "Low",
            "bg-orange-500":task.priority === "Medium",
            "bg-blue-500":task.priority === "High"

          })}></div>
          <h1> {task?.title}</h1>
        </div>
        <div className=" flex gap-3 items-center">
            <button className=" p-0 text-red-600">
        <Trash2/>
            </button>
            <Checkbox/>
        </div>
      </div>
      <h3 className=" mt-4"> {task.description} </h3>
    </div>
  );
};

export default TaskCard;

import { Checkbox } from "@/components/ui/checkbox";
import { Trash2 } from "lucide-react";

const TaskCard = () => {
  return (
    <div className=" border px-5 py-3 rounded-md">
      <div className="flex justify-between items-center">
        <div className=" flex gap-3 items-center">
          <div className=" size-3 rounded-full bg-red-700 "></div>
          <h1> Task Title</h1>
        </div>
        <div className=" flex gap-3 items-center">
            <button className=" p-0 text-red-600">
        <Trash2/>
            </button>
            <Checkbox/>
        </div>
      </div>
      <h3 className=" mt-4">Task Description</h3>
    </div>
  );
};

export default TaskCard;

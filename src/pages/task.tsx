import TaskCard from "@/component/tasksComponents/taskCard";

const Task = () => {
    return (
    <>
        <h1 className=" text-center text-2xl text-green-500 mt-10 font-serif cursor-text"> Task </h1>
        <div className=" w-[450px] mx-auto mt-9 ">
            
            <TaskCard/>
            <TaskCard/>
            <TaskCard/>
        </div></>
    );
};

export default Task;
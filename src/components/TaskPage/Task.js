import { useContext, useState } from "react";
import TaskList from "./TaskList";
import { todoContext } from "../../utils/todoContext";

const Task = () => {
  const {
    taskArr,
    setTaskArr,
    todoIndex,
    setTodoIndex,
    taskDetail,
    setTaskDetail,
  } = useContext(todoContext);

  const handleAddUpdateTask = () => {
    if (!todoIndex) {
      setTaskArr((prev) => [...prev, taskDetail]);
      setTaskDetail("");
      return;
    }

    taskArr[todoIndex] = taskDetail;
    setTaskArr(taskArr);
    setTodoIndex(null);
    setTaskDetail("");
  };

  return (
    <div className="flex flex-col items-center mt-[20px] mx-[3%]">
      <div className="flex flex-col tablet:flex-row tablet:justify-center gap-y-[15px] tablet:gap-x-[15px] w-full">
        <input
          placeholder="Enter Your Task"
          className="border rounded-md outline-none w-full py-[4px] px-[4px] tablet:w-[400px]"
          value={taskDetail}
          onChange={(e) => setTaskDetail(e.target.value)}
        />
        <div className="flex justify-center">
          <button
            onClick={() => {
              handleAddUpdateTask();
            }}
            className="px-[10px] py-[4px] bg-blue text-white font-medium rounded-lg"
          >
            {todoIndex != null ? "Update" : "Save"}
          </button>
        </div>
      </div>
      {taskArr.length > 0 &&
        taskArr?.map((task, index) => (
          <TaskList key={index} taskInfo={task} index={index} />
        ))}
    </div>
  );
};

export default Task;

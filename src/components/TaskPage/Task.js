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

  const [error, setError] = useState(false);

  // Add or Update task
  const handleAddUpdateTask = () => {
    if (taskDetail?.length <= 0) {
      setError(true);
      return;
    }

    setError(false);
    if (todoIndex == null) {
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
      {error && (
        <p className="text-white text-[20px]">Please enter some detail*</p>
      )}
      {taskArr.length > 0 &&
        taskArr?.map((task, index) => (
          <TaskList key={index} taskInfo={task} index={index} />
        ))}
    </div>
  );
};

export default Task;

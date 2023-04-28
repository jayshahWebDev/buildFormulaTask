import react, { useState } from "react";
import reactDom from "react-dom/client";
import Contact from "./components/ContactPage/Contact";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./components/Root";
import Home from "./components/HomePage/Home";
import Task from "./components/TaskPage/Task";
import { todoContext } from "./utils/todoContext";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/task",
        element: <Task />,
      },
    ],
  },
]);

const App = () => {
  const [taskArr, setTaskArr] = useState([]);
  const [todoIndex, setTodoIndex] = useState(null);
  const [taskDetail, setTaskDetail] = useState("");
  return (
    <todoContext.Provider
      value={{
        taskArr,
        setTaskArr,
        todoIndex,
        setTodoIndex,
        taskDetail,
        setTaskDetail,
      }}
    >
      <RouterProvider router={appRouter}></RouterProvider>
    </todoContext.Provider>
  );
};

const root = reactDom.createRoot(document.getElementById("root"));
root.render(<App />);

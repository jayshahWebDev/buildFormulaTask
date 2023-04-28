import { Outlet } from "react-router";
import Navbar from "./Navbar";

const Root = () => {
  return (
    <div className="bg-gradient-to-b from-[#3370ab] to-[#16c190] min-h-[100vh]">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Root;

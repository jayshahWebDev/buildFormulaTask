import { useContext } from "react";
import ClearModal from "./ClearModal";
import UsersDetailsList from "./UsersDetailsList";
import { todoContext } from "../../utils/todoContext";

const Home = () => {
  const { showModal, setShowModal } = useContext(todoContext);
  const userDetails = JSON.parse(localStorage.getItem("userDetails"));

  return (
    <div
      className={`mt-[20px] h-full font-Roboto ${
        showModal ? "pointer-events-none" : ""
      }`}
    >
      <p className="text-center text-[20px] tablet:text-[25px] text-white">
        Welcome to Build Formula, the ultimate platform for effortless task
        management!
      </p>

      {userDetails && (
        <div className="mt-[30px] flex flex-col items-center ">
          <div className="border w-[400px] bg-white">
            <div className="flex justify-around items-center py-[10px]">
              <p className="font-medium text-[20px]">First Name</p>
              <p className="font-medium text-[20px]">Last Name</p>
            </div>
            <hr className="h-[1px]" />
            {userDetails?.map((userDetail, i) => (
              <UsersDetailsList key={i} userDetail={userDetail} />
            ))}
          </div>
          <div className="mt-[20px] py-[5px] px-[10px] rounded-md bg-blue text-white">
            <button onClick={() => setShowModal(true)}>Clear</button>
          </div>
          {showModal && <ClearModal />}
        </div>
      )}
    </div>
  );
};

export default Home;

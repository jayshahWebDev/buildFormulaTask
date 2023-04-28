import { useContext } from "react";
import { todoContext } from "../../utils/todoContext";

const ClearModal = () => {
  const { showModal, setShowModal } = useContext(todoContext);

  return (
    <div
      className={`${
        showModal ? "pointer-events-auto" : ""
      } font-Roboto p-[10px] w-[350px] shadow-md rounded-md bg-white absolute left-[50%] top-[50%] transform -translate-x-[50%] -translate-y-[50%]`}
    >
      <p className="text-center">Are you sure you want to clear?</p>
      <div className="mt-[35px] flex gap-x-[20px] justify-end">
        <button
          className="py-[5px] px-[10px] rounded-md bg-red-500 text-white"
          onClick={() => {
            localStorage.clear();
            setShowModal(false);
          }}
        >
          Clear
        </button>
        <button
          className="py-[5px] px-[10px] rounded-md bg-slate-300"
          onClick={() => setShowModal(false)}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default ClearModal;

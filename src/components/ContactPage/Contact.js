import { useState } from "react";
import { contactFormValidation } from "../../utils/helper";

const Contact = () => {
  const [userDetails, setUserDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });
  const [error, setError] = useState(null);

  const saveUserDetail = () => {
    const errorInfo = contactFormValidation(userDetails);
    setError(errorInfo);
    if (
      errorInfo?.allField &&
      errorInfo?.firstName &&
      errorInfo?.lastName &&
      errorInfo?.email &&
      errorInfo?.phone
    ) {
      const users = JSON.parse(localStorage.getItem("userDetails"));
      !users
        ? localStorage.setItem("userDetails", JSON.stringify([userDetails]))
        : localStorage.setItem(
            "userDetails",
            JSON.stringify([...users, userDetails])
          );
      setUserDetails({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
      });
    }
  };

  return (
    <div className="flex flex-col gap-y-[20px] justify-center items-center h-[calc(100vh-61px)] font-Roboto">
      <div className="bg-white max-w-[350px] m-auto py-[10px] px-[10px] border rounded-lg shadow-lg">
        <div className="mt-[15px]">
          <p className="text-[13px] font-medium ml-[3px]">First Name</p>
          <input
            className="border rounded-md px-[6px] py-[4px] w-[300px] outline-none"
            placeholder="First Name"
            value={userDetails.firstName}
            onChange={(e) =>
              setUserDetails({ ...userDetails, firstName: e.target.value })
            }
          />
          {!error?.allField && error?.firstName && (
            <p className="text-red-500 ml-[3px] mt-[3px] text-[13px]">
              Please enter valid first name
            </p>
          )}
        </div>

        <div className="mt-[15px]">
          <p className="text-[13px] font-medium ml-[3px]">Last Name</p>
          <input
            className="border rounded-md px-[6px] py-[4px] w-[300px] outline-none"
            placeholder="Last Name"
            value={userDetails.lastName}
            onChange={(e) =>
              setUserDetails({ ...userDetails, lastName: e.target.value })
            }
          />
          {!error?.allField && error?.lastName && (
            <p className="text-red-500 ml-[3px] mt-[3px] text-[13px]">
              Please enter valid last name
            </p>
          )}
        </div>

        <div className="mt-[15px]">
          <p className="text-[13px] font-medium ml-[3px]">Email</p>
          <input
            className="border rounded-md px-[6px] py-[4px] w-[300px] outline-none"
            placeholder="Email"
            value={userDetails.email}
            onChange={(e) =>
              setUserDetails({ ...userDetails, email: e.target.value })
            }
          />
          {!error?.allField && error?.email && (
            <p className="text-red-500 ml-[3px] mt-[3px] text-[13px]">
              Please enter valid email address
            </p>
          )}
        </div>

        <div className="mt-[15px]">
          <p className="text-[13px] font-medium ml-[3px]">Phone</p>
          <input
            className="border rounded-md px-[6px] py-[4px] w-[300px] outline-none appearance-none"
            placeholder="Phone"
            type="tel"
            maxLength={10}
            pattern="[0-9.]+"
            value={userDetails.phone}
            onChange={(e) => {
              if (!isNaN(e.target.value))
                setUserDetails({ ...userDetails, phone: e.target.value });
            }}
          />
          {!error?.allField && error?.phone && (
            <p className="text-red-500 ml-[3px] mt-[3px] text-[13px]">
              Please enter valid phone number
            </p>
          )}
        </div>

        <div className="flex flex-col justify-center items-center mt-[15px]">
          {error?.allField && (
            <p className="text-red-500 mb-[3px] text-[15px]">
              All field are required
            </p>
          )}
          <button
            onClick={() => {
              saveUserDetail();
            }}
            className="px-[10px] py-[4px] bg-blue text-white font-medium rounded-lg"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;

import UsersDetailsList from "./UsersDetailsList";

const Home = () => {
  const userDetails = JSON.parse(localStorage.getItem("userDetails"));

  return (
    <div className="mt-[20px] h-full font-Roboto">
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
        </div>
      )}
    </div>
  );
};

export default Home;

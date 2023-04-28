const UsersDetailsList = ({ userDetail }) => {
  return (
    <div>
      <div className="flex justify-around items-center py-[10px]">
        <p className="text-[17px]">{userDetail?.firstName}</p>
        <p className="text-[17px]">{userDetail?.lastName}</p>
      </div>
      <hr className="h-[1px]" />
    </div>
  );
};

export default UsersDetailsList;

import React from "react";

const UserCard = ({name, avatar, age, location}) => {
  return (
    <div className="bg-slate-600 rounded-lg text-white w-1/6">
      <div className="overflow-hidden rounded-t-lg m-1">
        <img
          src={avatar}
          alt="Profile"
          className="hover:scale-110 transition-all duration-300 w-full"
        />
      </div>
      <div className=" flex flex-col py-1 px-2">
        <h3>Name: {name}</h3>
        <h3>Age: {age}</h3>
        <h3>Location: {location}</h3>
      </div>
    </div>
  );
};

export default UserCard;

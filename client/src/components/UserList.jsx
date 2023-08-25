import React, { useEffect, useState } from "react";
import UserCard from "./UserCard";

const UserList = () => {
  const [userData, setUserData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [minAge, setMinAge] = useState("");
  const [maxAge, setMaxAge] = useState("");
  const [location, setLocation] = useState("");
  const [allData, setAllData] = useState("");
  const [filterApplied, setFilterApplied] = useState(false);

  const getData = async (page) => {
    const response = await fetch(
      `https://${process.env.REACT_APP_API_TOKEN}.mockapi.io/users?page=${page}&limit=10`
    );
    if (response.ok) {
      const data = await response.json();
      setUserData(data);
    } else {
      console.log("Failed to fetch data");
    }
  };

  const getAllData = async () => {
    const response = await fetch(
      `https://${process.env.REACT_APP_API_TOKEN}.mockapi.io/users`
    );
    if (response.ok) {
      const data = await response.json();
      setAllData(data);
    } else {
      console.error("Failed to fetch data");
    }
  };

  useEffect(() => {
    getAllData();
  }, []);

  useEffect(() => {
    getData(currentPage);
  }, [currentPage]);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const applyFilter = () => {
    const filteredUsers = allData.filter((user) => {
      const isAgeInRange =
        (minAge === "" || user.age >= parseInt(minAge)) &&
        (maxAge === "" || user.age <= parseInt(maxAge));
      const isLocationMatch =
        location === "" ||
        user.location.toLowerCase().includes(location.toLowerCase());
      return isAgeInRange && isLocationMatch;
    });

    setFilterData(filteredUsers);
    setFilterApplied(true);
    console.log(filterData);
  };

  return (
    <div className=" max-w-7xl flex flex-col justify-center mx-auto py-4">
      <h2 className="text-center mb-3 text-2xl font-bold text-gray-700">
        Users List
      </h2>

      <div className="flex justify-center gap-3 w-fit mx-auto flex-wrap my-3">
        <input
          type="number"
          placeholder="Min Age"
          value={minAge}
          onChange={(e) => setMinAge(e.target.value)}
          className="px-2 py-1 rounded-lg outline-none"
        />
        <input
          type="number"
          placeholder="Max Age"
          value={maxAge}
          onChange={(e) => setMaxAge(e.target.value)}
          className="px-2 py-1 rounded-lg outline-none"
        />

        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="px-2 py-1 rounded-lg outline-none"
        />
        <button
          onClick={applyFilter}
          className="bg-blue-500 hover:bg-blue-600 rounded-lg px-2 py-1 text-white"
        >
          Apply Filters
        </button>
        <button
          onClick={() => {
            setLocation("");
            setMinAge("");
            setMaxAge("");
            setFilterApplied(false);
          }}
          className="bg-blue-500 hover:bg-blue-600 rounded-lg px-2 py-1 text-white"
        >
          Reset Filters
        </button>
      </div>

      {filterApplied ? (
        <>
          {filterData.length === 0 ? (
            <div className="flex mx-auto">No data found</div>
          ) : (
            <div className="flex w-full flex-wrap justify-center gap-3">
              {filterData.map((user) => (
                <UserCard
                  key={user.id}
                  name={user.name}
                  avatar={user.avatar}
                  age={user.age}
                  location={user.location}
                />
              ))}
            </div>
          )}
        </>
      ) : (
        <>
          <div className="flex w-full flex-wrap justify-center gap-3">
            {userData.map((user) => (
              <UserCard
                key={user.id}
                name={user.name}
                avatar={user.avatar}
                age={user.age}
                location={user.location}
              />
            ))}
          </div>
          <div className="flex justify-center items-center mt-4 text-white gap-2">
            <button
              className="bg-blue-500 disabled:bg-blue-400 enabled:hover:bg-blue-600 rounded-lg p-2"
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              Previous Page
            </button>
            <h3 className="text-black text-xl mx-2">{currentPage}</h3>
            <button
              className="bg-blue-500 disabled:bg-blue-400 enabled:hover:bg-blue-600 rounded-lg p-2"
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === 6}
            >
              Next Page
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default UserList;
